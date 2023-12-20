import { type FC } from 'react'
import { motion } from 'framer-motion'
import style from './Img.module.css'
import { fadeIn } from '@/config/variants'

interface props {
  children?: React.ReactNode
}

export const ImgBanner: FC<props> = ({ children }) => {
  return (
    <img
      className={`rounded-full w-[400px] ${style.img_border}`}
      src='/assets/portrait.jpeg'
      id='img-border'
      alt=''
    />
  )
}
