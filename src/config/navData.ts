import type { dataIcon } from '@/components/react/ui/Logo/nav.data'

interface iNavbar {
  path: string
  Icon: keyof typeof dataIcon
}
export const NavData: iNavbar[] = [
  {
    path: 'home',
    Icon: 'home'
  },
  {
    path: 'about',
    Icon: 'user'
  },
  {
    path: 'services',
    Icon: 'project'
  },

  {
    path: 'work',
    Icon: 'works'
  },
  {
    Icon: 'contact',
    path: 'contact'
  }
]
