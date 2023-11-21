/// <reference types="astro/client" />
declare module 'mdx-mermaid/Mermaid'
declare global {
    interface Window { callback: any; }

}
// env.d.ts
declare module 'react-map-interaction' {
    export const MapInteractionCSS: React.ComponentType<any>;

}
