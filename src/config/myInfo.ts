import type { iconPaths } from '@/components/shared/Icons/IconPaths'

interface Props {
  name: string
  lastName: string
  description: string
  socials: {
    href: string
    icon: keyof typeof iconPaths
  }[]
  cv: string,
  job: (string | number)[]
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
    'Con experiencia en el desarrollo de aplicaciones móviles y web. He trabajado en proyectos que han acelerado el tiempo de desarrollo',
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
  ]
}
