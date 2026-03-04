/**
 * Contrato ProductCertificateNFT en FST Testnet.
 * ABI mínimo para leer certificados (metadata API) y para mintear desde el front (si el owner lo permite).
 */
import { Env } from "@/config/env";

export const PRODUCT_CERTIFICATE_NFT_ADDRESS =
  Env.PRODUCT_CERTIFICATE_NFT_ADDRESS;

export const PRODUCT_CERTIFICATE_NFT_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function tokenURI(uint256 tokenId) view returns (string)",
  "function getCertificate(uint256 tokenId) view returns (string productId, uint256 expiresAt)",
  "function isExpired(uint256 tokenId) view returns (bool)",
  "function ownerOf(uint256 tokenId) view returns (address)",
  "function mint(address to, string productId, uint256 expiresAt) returns (uint256)",
] as const;
