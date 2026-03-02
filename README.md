# oscarherrera.tech

Sitio personal de **Oscar Eduardo Herrera Lugo** — Full Stack Developer.

## Contenido

- **Sobre mí**: perfil, ubicación, disponibilidad para viajar y cambio de residencia.
- **Experiencia laboral**: Extreme Technologies, Disglobal, Legger, Legendarium, Ardecon.
- **Proyectos**: Yafuzgame (NFT, Solidity, Next.js, AWS).
- **Habilidades**: lenguajes, backend, frontend, móvil, blockchain, bases de datos, herramientas.
- **Formación**: Politécnico Grancolombiano, SENA, certificaciones Udemy, idiomas.
- **Contacto**: email, teléfono, LinkedIn, GitHub.

## Cómo probar en local

Abre `index.html` en el navegador o sirve la carpeta con un servidor local:

```bash
# Con Python
python3 -m http.server 8000

# Con Node (npx)
npx serve .
```

Luego visita `http://localhost:8000`.

## Cómo publicar

1. Sube la carpeta `oscarherrera.tech` (con `index.html`, `styles.css`, `main.js`) a tu hosting o a GitHub Pages.
2. Si usas el dominio **oscarherrera.tech**, configura el DNS apuntando a tu hosting.
3. No se requieren dependencias ni build: son HTML, CSS y JS estáticos.

## Estructura

- `index.html` — Contenido y JSON-LD (schema.org) para que buscadores y sistemas escaneen tu información.
- `styles.css` — Tema claro/oscuro (respeta preferencia del sistema), responsive, accesible.
- `main.js` — Navegación móvil, alternar tema, año en el pie.

## Mantener la información actualizada

Edita el contenido directamente en `index.html`. Si actualizas también la hoja de vida en la carpeta padre (`hoja_de_vida.md` o `README.md`), considera sincronizar los datos en este sitio (experiencia, contacto, formación) para que todo coincida.
