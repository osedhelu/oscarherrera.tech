import type { iconPaths } from '@/components/shared/Icons/IconPaths'

interface iNavbar {
  path: string
  Icon: keyof typeof iconPaths
}
export const NavData: iNavbar[] = [
  {
    path: 'home',
    Icon: 'heart'
  },
  {
    path: 'about',
    Icon: 'pencil-line'
  },
  {
    path: 'services',
    Icon: 'linkedin-logo'
  },

  {
    path: 'work',
    Icon: 'dribbble-logo'
  }
]
