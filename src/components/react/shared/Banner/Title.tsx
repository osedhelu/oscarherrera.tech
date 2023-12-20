import { type FC } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/config/variants'

interface props {
  children?: React.ReactNode
  className: string
}

export const TitleBanner: FC<props> = ({ className, children }) => {
  return <motion.h1 className={className}>{children}</motion.h1>
}
