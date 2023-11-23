import { useState, type FC } from 'react';
import style from './App.module.css'
import { Mermaid } from './Mermaid';
import { MapInteractionCSS } from 'react-map-interaction';

declare global {
  interface Window { callback: any; }

}




const diagramClass = `
graph LR
   A[Experiencia]
   B[Habilidades]
   C[Educación]
   D[Certificaciones]
   A -->|Disglobal| E[Reducción de empleados, Aceleración del tiempo de desarrollo, Stack tecnológico]
   A -->|Seccussu| F[Desarrollo de plataforma web, Stack tecnológico]
   A -->|Danielapp| G[Mejora del sistema de la tienda virtual, Stack tecnológico]
   A -->|Ardecon| H[Creación de página web, Stack tecnológico]
   A -->|Sistema de Gestión| I[Optimización de recursos, Stack tecnológico]
   A -->|Yafuzgame| J[Desarrollo de juego NFT, Stack tecnológico]
   B --> K[Lenguajes de Programación, Herramientas de Frameworks, Base de Datos, Herramientas]
   C --> L[Análisis y desarrollo de sistemas de información]
   D --> M[Android Avanzado con Kotlin, Curso de desarrollo de Videojuegos NFT, Programación de Aplicaciones para Android con Kotlin, Django REST Framework, Next.js]


`;


interface props {
  children?: React.ReactNode
}

const AppSection: FC<props> = ({ }) => {
  const [position, setPosition] = useState({
    value: {
      scale: 1,
      translation: { x: 100, y: 200 }
    }
  })

  return (

    <div className='w-screen h-screen mt-[6rem]'>

      <MapInteractionCSS
        value={position.value}
        onChange={(value: any) => setPosition({ value })}
      >
        <Mermaid chart={diagramClass} />
      </MapInteractionCSS>

    </div>
  )
}


export default AppSection