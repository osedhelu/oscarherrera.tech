import { iconPaths } from '@/components/shared/Icons/IconPaths'
import type { FC, HTMLAttributes } from 'react'
import style from './Icons.module.css'

interface Props {
  icon: keyof typeof iconPaths
  gradient?: boolean
  className?: string
}

export const Iconsjsx: FC<Props> = ({
  icon,
  gradient,
  className = 'stroke-[#000000] dark:stroke-[#ffffff]'
}) => {
  const gradientId =
    'icon-gradient-' + Math.round(Math.random() * 10e12).toString(36)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='40'
      className={`${className} `}
      viewBox='0 0 256 256'
      aria-hidden='true'
    >
      <g dangerouslySetInnerHTML={{ __html: iconPaths[icon] }} />

      {gradient && (
        <linearGradient
          id={gradientId}
          x1='23'
          x2='235'
          y1='43'
          y2='202'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='var(--gradient-stop-1)' />
          <stop offset='.5' stop-color='var(--gradient-stop-2)' />
          <stop offset='1' stop-color='var(--gradient-stop-3)' />
        </linearGradient>
      )}
    </svg>
  )
}
