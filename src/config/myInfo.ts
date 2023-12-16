import type { iconPaths } from '@/components/shared/Icons/IconPaths'

interface ExperienceProps {
  title: string
  ano: number
}
interface Props {
  name: string
  lastName: string
  description: string
  socials: {
    href: string
    icon: keyof typeof iconPaths
  }[]
  cv: string
  job: (string | number)[]
  experience: ExperienceProps[]
}

export const dataMyInfo: Props = {
  name: 'Oscar',
  lastName: 'Herrera Lugo',
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
    'Soy un desarrollador full stack con experiencia en el desarrollo de aplicaciones móviles y web. Tengo habilidades avanzadas en Node.js, Kotlin, Python, Angular, Next.js, Nest.js, Django, Solidity y Mongo. También tengo conocimientos en MySQL, SQL Server y PostgreSQL. Soy un hablante nativo de español con habilidades básicas en inglés.',
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
      href: 'https://twitter.com/osedhelu',
      icon: 'twitter-logo'
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
