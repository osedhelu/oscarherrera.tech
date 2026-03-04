import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import type { NFTMetadata } from "@/types/nft-metadata";

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

export async function GET(_req: NextRequest) {
  return NextResponse.json(STATIC_METADATA, {
    headers: {
      "Cache-Control": "public, max-age=300",
    },
  });
}

