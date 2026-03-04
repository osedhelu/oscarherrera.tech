/**
 * Metadata estándar ERC-721 / OpenSea para NFTs.
 * El JSON que sirve tu API (tokenURI) debe seguir este formato para que
 * wallets y mercados (OpenSea, etc.) muestren nombre, descripción e imagen.
 *
 * @see https://docs.opensea.io/docs/metadata-standards
 */
export interface NFTAttribute {
  trait_type: string;
  value: string | number;
  display_type?: "date" | "number" | "boost_percentage" | "boost_number";
}

export interface NFTMetadata {
  /** Nombre del NFT (ej. "Certificado - Curso React") */
  name: string;
  /** Descripción del certificado / producto */
  description: string;
  /** URL de la imagen (PNG, GIF, etc.). Debe ser accesible por GET. */
  image: string;
  /** URL externa (opcional), ej. página del producto */
  external_url?: string;
  /** Atributos que muestran mercados como OpenSea (ej. caducidad, producto) */
  attributes: NFTAttribute[];
}
