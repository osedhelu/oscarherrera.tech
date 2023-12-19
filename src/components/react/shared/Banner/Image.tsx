import { type FC } from 'react'
import { motion } from 'framer-motion'
import style from './Img.module.css'
import { fadeIn } from '@/config/variants'

interface props {
  children?: React.ReactNode
}

export const ImgBanner: FC<props> = ({ children }) => {
  return (
    <motion.img
      variants={fadeIn('left', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.3 }}
      className={`rounded-full w-[400px] ${style.img_border}`}
      src='/assets/portrait.jpeg'
      id='img-border'
      alt=''
    >
      {children}
    </motion.img>
  )
}
