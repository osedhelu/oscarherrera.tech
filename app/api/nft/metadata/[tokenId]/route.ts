import type { NFTMetadata } from "@/types/nft-metadata";
import { NextRequest, NextResponse } from "next/server";

const STATIC_METADATA: NFTMetadata = {
  name: "FST Certificate",
  description:
    "Certificado NFT estático de ejemplo para integración. Todos los tokens comparten esta metadata.",
  image: "https://osedhelu.com/images/nft-placeholder.png",
  external_url: "https://osedhelu.com/marketplace",
  attributes: [
    { trait_type: "Tipo", value: "Certificado estático" },
    { trait_type: "Red", value: "FST Testnet" },
  ],
};

export async function GET(
  _request: NextRequest,
  _context: { params: { tokenId: string } }
) {
  return NextResponse.json(STATIC_METADATA, {
    headers: {
      "Cache-Control": "public, max-age=300",
    },
  });
}
