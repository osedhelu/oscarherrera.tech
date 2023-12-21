import type { iconPaths } from '@/components/shared/Icons/IconPaths'
import { defaultLang, ui } from '@/i18n/ui'

interface ExperienceProps {
  title: keyof typeof ui[typeof defaultLang]
  ano: number
}
interface Props {
  name: keyof typeof ui[typeof defaultLang]
  description2: keyof typeof ui[typeof defaultLang]
  lastName: keyof typeof ui[typeof defaultLang]
  description: keyof typeof ui[typeof defaultLang]
  socials: {
    href: string
    icon: keyof typeof iconPaths
  }[]
  cv: string
  job: (keyof typeof ui[typeof defaultLang] | number)[]
  experience: ExperienceProps[]
  titleAbout: keyof typeof ui[typeof defaultLang]
}

export const dataMyInfo: Props = {
  name: 'myInfo.name',
  lastName: 'myInfo.lastName',
  titleAbout: 'about.title',
  cv: 'https://docs.google.com/document/d/17EmXALv6Fqyhs2D85J12lCpqfA26vmkGpSGMlaiFlDs/edit#heading=h.gjdgxs',
  job: [
    'myInfo.job.1',
    1000,
    'myInfo.job.2',
    1000,
    'myInfo.job.3',
    1000,
    'myInfo.job.4',
    1000
  ],
  description: 'myInfo.description',
  description2: 'myInfo.description2',
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
      title: 'myInfo.experience.1'
    },
    {
      ano: 12,
      title: 'myInfo.experience.2'
    },
    {
      ano: 20,
      title: 'myInfo.experience.3'
    }
  ]
}
