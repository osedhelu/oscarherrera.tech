import { type FC } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/config/variants'

interface props {
  children?: React.ReactNode
  className: string
}

export const TitleBanner: FC<props> = ({ className, children }) => {
  return (
    <motion.h1
      variants={fadeIn('right', 0.03)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.03 }}
      className={className}
    >
      {children}
    </motion.h1>
  )
}
