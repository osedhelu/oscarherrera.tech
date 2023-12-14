import { type FC } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { dataMyInfo } from '@/config/myInfo'
import { Iconsjsx } from './Icons'

interface props {
  children?: React.ReactNode
}
export const TextAnimation: FC<props> = ({}) => {
  return (
    <>
      <span className='mr-4'>soy </span>
      <TypeAnimation
        sequence={dataMyInfo.job}
        className='text-accent'
        wrapper='span'
        speed={50}
        repeat={Infinity}
      />
    </>
  )
}
