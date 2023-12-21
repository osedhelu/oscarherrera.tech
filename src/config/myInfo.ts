import type { iconPaths } from '@/components/shared/Icons/IconPaths'

interface ExperienceProps {
  title: string
  ano: number
}
interface Props {
  name: string
  description2: string
  lastName: string
  description: string
  socials: {
    href: string
    icon: keyof typeof iconPaths
  }[]
  cv: string
  job: (string | number)[]
  experience: ExperienceProps[]
  titleAbout: string
}

export const dataMyInfo: Props = {
  name: 'Oscar',
  lastName: 'Herrera Lugo',
  titleAbout: 'Sobre Mí',
  cv: 'https://docs.google.com/document/d/17EmXALv6Fqyhs2D85J12lCpqfA26vmkGpSGMlaiFlDs/edit#heading=h.gjdgxs',
  job: [
    'Android Developer',
    1000,
    'Backend Developer',
    1000,
    'Frontend Developer',
    1000,
    'Full stack Developer',
    1000
  ],
  description:
    'Construyendo experiencias completas desde el front-end hasta el back-end, dejando una huella tecnológica en cada proyecto.',
  description2:
    'Con 4 años de trayectoria, he puesto en práctica métodos efectivos y enfoques ágiles para asegurar resultados de calidad y eficiencia en cada proyecto.',
  socials: [
    {
      href: 'https://www.linkedin.com/in/osedhelu/',
      icon: 'linkedin-logo'
    },
    {
      href: 'https://github.com/osedhelu',
      icon: 'github-logo'
    },
    {
      href: 'https://twitter.com/osedhelu12',
      icon: 'twitter-logo'
    },
    {
      href: 'https://codeium.com/profile/osedhelu',
      icon: 'code'
    }
  ],
  experience: [
    {
      ano: 4,
      title: 'Años de<br/> experiencia '
    },
    {
      ano: 12,
      title: 'Proyectos <br/> realizados'
    },
    {
      ano: 20,
      title: 'Clientes <br/> satisfechos'
    }
  ]
}
