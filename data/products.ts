import type { Product } from "@/types/product";

/**
 * Catálogo de productos del marketplace.
 * Cada producto, al comprarse con FSTD, genera un NFT certificado con caducidad de 6 meses.
 *
 * - id: debe ser único y usarse como productId al mintear el NFT.
 * - imageUrl: puede ser ruta relativa (/images/products/xxx.png) o URL absoluta.
 *   Las imágenes se sirven desde /public si son rutas relativas.
 */
export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Curso de Solidity",
    description: "Certificado de compra del curso de Solidity. Válido 6 meses.",
    priceFSTD: "25",
    imageUrl: "/images/products/curso-solidity.png",
    category: "Cursos",
  },
  {
    id: "prod-2",
    name: "Membresía Premium",
    description: "Membresía premium por 6 meses. Certificado NFT como comprobante.",
    priceFSTD: "50",
    imageUrl: "/images/products/membresia.png",
    category: "Membresías",
  },
  {
    id: "prod-3",
    name: "Plantilla Web3",
    description: "Plantilla Next.js + Web3 para proyectos blockchain. Acceso 6 meses.",
    priceFSTD: "15",
    imageUrl: "/images/products/plantilla-web3.png",
    category: "Plantillas",
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
