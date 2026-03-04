# NFTs de certificado de compra y productos

## Resumen

- Cada **producto** del marketplace se puede comprar con **FSTD** (FST Smart Chain Testnet).
- Al comprar, se mintea un **NFT** que certifica la compra y tiene **6 meses de caducidad**.
- El NFT sigue el estándar **ERC-721**. Su `tokenURI` apunta a un JSON (metadata) que sirve esta app.

---

## Cómo funciona con el smart contract

1. **FSTBankCenter (FSTD)**  
   Token ERC-20 con el que el usuario paga (`transfer` al merchant).

2. **ProductCertificateNFT**  
   Contrato ERC-721 que solo el owner puede mintear. Al mintear se guarda:
   - `productId` (string): identificador del producto, ej. `"prod-1"`.
   - `expiresAt` (uint256): timestamp Unix de caducidad (ej. `now + 6 meses`).

3. **tokenURI**  
   El contrato devuelve `baseURI + tokenId`, por ejemplo:
   `https://tu-dominio.com/api/nft/metadata/1`  
   Esa URL es la que devuelve el **JSON de metadata** del NFT.

---

## Formato del JSON de metadata (tokenURI)

El estándar que usan OpenSea, wallets, etc. es este. **Tu API debe devolver exactamente un JSON con estos campos**:

```json
{
  "name": "Certificado: Nombre del producto",
  "description": "Descripción del producto. Este certificado caduca el 2025-09-03.",
  "image": "https://tu-dominio.com/images/products/curso.png",
  "external_url": "https://tu-dominio.com/marketplace",
  "attributes": [
    { "trait_type": "Producto", "value": "Curso de Solidity" },
    { "trait_type": "Caduca", "value": "2025-09-03", "display_type": "date" },
    { "trait_type": "Product ID", "value": "prod-1" },
    { "trait_type": "Categoría", "value": "Cursos" }
  ]
}
```

### Campos

| Campo           | Obligatorio | Descripción |
|----------------|------------|-------------|
| `name`         | Sí         | Nombre del NFT (ej. "Certificado: Curso React"). |
| `description`  | Sí         | Texto libre; suele incluir caducidad. |
| `image`         | Sí         | **URL absoluta** de la imagen (PNG, GIF, WebP, etc.). Debe ser accesible por GET. |
| `external_url`  | No         | Enlace a tu web (ej. página del marketplace). |
| `attributes`    | Recomendado| Lista de `{ "trait_type": "...", "value": "..." }`. Opcional: `"display_type": "date"` para fechas. |

### Imágenes

- **Formato:** PNG, GIF, WebP, JPG. Tamaño típico: 350x350 hasta 1000x1000 px.
- **URL:** Tiene que ser **absoluta** (empieza por `https://`). Si en tu código usas rutas relativas (ej. `/images/products/curso.png`), la API las convierte a absolutas usando el origen de la app.
- **Dónde guardar:** En este proyecto, en `public/images/products/`. Ejemplo: `public/images/products/curso-solidity.png` → la URL será `https://tu-dominio.com/images/products/curso-solidity.png`.

---

## Dónde se define cada cosa en el proyecto

| Qué | Dónde |
|-----|--------|
| Lista de productos (id, nombre, precio, imagen) | `data/products.ts` |
| Tipo del producto | `types/product.ts` |
| Formato del JSON del NFT | `types/nft-metadata.ts` |
| API que devuelve el JSON por `tokenId` | `app/api/nft/metadata/[tokenId]/route.ts` |
| Contrato NFT (caducidad, productId) | `fst-bank-center/contracts/ProductCertificateNFT.sol` |

---

## Caducidad de 6 meses

- Al mintear, se pasa `expiresAt = timestamp actual + 6 meses` (en segundos).
- En el contrato: `isExpired(tokenId)` indica si ya caducó.
- En el JSON de metadata, el atributo `"Caduca"` muestra la fecha en formato `YYYY-MM-DD` para que wallets y mercados la muestren bien.

---

## Flujo completo (comprar → NFT)

1. Usuario elige un producto y paga en FSTD (`transfer` al merchant).
2. El backend (o un proceso que tú controles) llama al contrato NFT:
   ```text
   mint(comprador, productId, expiresAt)
   ```
   con `expiresAt = now + 6 meses`.
3. El contrato mintea el token y asigna `tokenURI = baseURI + tokenId`.
4. Wallets/OpenSea piden esa URL y tu API devuelve el JSON de metadata (con `image` absoluta y atributos como "Caduca" y "Producto").
5. El usuario ve el NFT con nombre, descripción, imagen y caducidad.

Si quieres, en el siguiente paso se puede añadir la UI del marketplace para listar productos y el botón “Comprar con FSTD” que dispare el pago + mint.
