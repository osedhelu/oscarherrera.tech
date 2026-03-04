/**
 * Producto del marketplace. Al comprar se emite un NFT certificado con caducidad (ej. 6 meses).
 */
export interface Product {
  /** Identificador único (debe coincidir con productId en el contrato al mintear) */
  id: string;
  name: string;
  description: string;
  /** Precio en FSTD (unidades humanas, ej. 10 = 10 FSTD) */
  priceFSTD: string;
  /** URL de la imagen del producto (absoluta o relativa a la app) */
  imageUrl: string;
  /** Opcional: categoría o SKU */
  category?: string;
}
