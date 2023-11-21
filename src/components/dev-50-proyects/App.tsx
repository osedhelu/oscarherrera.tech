import type { FC } from 'react';
import { Mermaid } from './Mermaid';
import { MapInteractionCSS } from 'react-map-interaction';

declare global {
  interface Window { callback: any; }
}
const diagramClass = `
classDiagram
  class Desarrollador {
      +Habilidades
      +Experiencia
  }
  class Kotlin {
      +Habilidades
      +Experiencia
  }
  class JetpackCompose {
      +Habilidades
      +Experiencia
  }
  class Django {
      +Habilidades
      +Experiencia
  }
  class NestJS {
      +Habilidades
      +Experiencia
  }
  class NodeJS {
      +Habilidades
      +Experiencia
  }
  class SocketIO {
      +Habilidades
      +Experiencia
  }
  class ArquitecturaHexagonal {
      +Habilidades
      +Experiencia
  }
  class BancoDeVenezuela {
      +Proyectos
      +Responsabilidades
  }
  class Banplus {
      +Proyectos
      +Responsabilidades
  }
  class Bancaribe {
      +Proyectos
      +Responsabilidades
  }
  class SmsPago {
      +Proyectos
      +Responsabilidades
  }
  Desarrollador -- Kotlin: Tiene habilidades en
  Desarrollador -- JetpackCompose: Tiene habilidades en
  Desarrollador -- Django: Tiene habilidades en
  Desarrollador -- NestJS: Tiene habilidades en
  Desarrollador -- NodeJS: Tiene habilidades en
  Desarrollador -- SocketIO: Tiene habilidades en
  Desarrollador -- ArquitecturaHexagonal: Tiene habilidades en
  Kotlin -- BancoDeVenezuela: Ha trabajado en
  Kotlin -- Banplus: Ha trabajado en
  Kotlin -- Bancaribe: Ha trabajado en
  Django -- BancoDeVenezuela: Ha trabajado en
  Django -- Banplus: Ha trabajado en
  Django -- Bancaribe: Ha trabajado en
  NestJS -- SmsPago: Ha trabajado en
  NodeJS -- SmsPago: Ha trabajado en
  SocketIO -- SmsPago: Ha trabajado en
  ArquitecturaHexagonal -- SmsPago: Ha trabajado en


`;

interface props {
  children?: React.ReactNode
}

const AppSection: FC<props> = ({ }) => {
  window.callback = async function (e: any) {
    console.log(e)
  }
  return (

    <div className='w-screen h-screen mt-[6rem]'>
      <MapInteractionCSS>
        <Mermaid chart={diagramClass} />
      </MapInteractionCSS>

    </div>
  )
}

export default AppSection