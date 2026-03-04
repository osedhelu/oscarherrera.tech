import { getProductById } from "@/data/products";
import {
  PRODUCT_CERTIFICATE_NFT_ABI,
  PRODUCT_CERTIFICATE_NFT_ADDRESS,
} from "@/contracts/productCertificateNFT";
import type { NFTMetadata } from "@/types/nft-metadata";
import { ethers } from "ethers";
import { NextRequest, NextResponse } from "next/server";

const RPC =
  process.env.NEXT_PUBLIC_FST_TESTNET_RPC ||
  "https://node-1-testnet.up.railway.app";

/** Convierte URL relativa a absoluta usando el origen de la app */
function toAbsoluteImageUrl(
  imageUrl: string,
  origin: string
): string {
  if (imageUrl.startsWith("http")) return imageUrl;
  const base = origin.replace(/\/$/, "");
  const path = imageUrl.startsWith("/") ? imageUrl : `/${imageUrl}`;
  return `${base}${path}`;
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ tokenId: string }> }
) {
  const { tokenId } = await params;
  const tokenIdNum = parseInt(tokenId, 10);
  if (Number.isNaN(tokenIdNum) || tokenIdNum < 1) {
    return NextResponse.json(
      { error: "tokenId inválido" },
      { status: 400 }
    );
  }

  if (!PRODUCT_CERTIFICATE_NFT_ADDRESS) {
    return NextResponse.json(
      { error: "Contrato NFT no configurado" },
      { status: 503 }
    );
  }

  try {
    const provider = new ethers.providers.JsonRpcProvider(RPC);
    const contract = new ethers.Contract(
      PRODUCT_CERTIFICATE_NFT_ADDRESS,
      PRODUCT_CERTIFICATE_NFT_ABI,
      provider
    );
    const [productId, expiresAt] = await contract.getCertificate(tokenIdNum);
    const product = getProductById(productId);
    if (!product) {
      return NextResponse.json(
        { error: "Producto no encontrado para este certificado" },
        { status: 404 }
      );
    }

    const origin =
      process.env.NEXT_PUBLIC_APP_URL ||
      process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "https://oscarherrera.tech";
    const imageUrl = toAbsoluteImageUrl(product.imageUrl, origin);
    const expiresAtDate = new Date(Number(expiresAt) * 1000).toISOString().slice(0, 10);

    const attributes: NFTMetadata["attributes"] = [
      { trait_type: "Producto", value: product.name },
      { trait_type: "Caduca", value: expiresAtDate, display_type: "date" },
      { trait_type: "Product ID", value: product.id },
    ];
    if (product.category) {
      attributes.push({ trait_type: "Categoría", value: product.category });
    }

    const metadata: NFTMetadata = {
      name: `Certificado: ${product.name}`,
      description: `${product.description} Este certificado caduca el ${expiresAtDate}.`,
      image: imageUrl,
      external_url: `${origin}/marketplace`,
      attributes,
    };

    return NextResponse.json(metadata, {
      headers: {
        "Cache-Control": "public, max-age=300",
      },
    });
  } catch (e) {
    console.error("Error generando metadata NFT:", e);
    return NextResponse.json(
      { error: "Error al obtener certificado" },
      { status: 500 }
    );
  }
}
