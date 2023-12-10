import { type FC } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { dataMyInfo } from '@/config/myInfo'
import { Iconsjsx } from './Icons'

interface props {
  children?: React.ReactNode
}
export const TextAnimation: FC<props> = ({}) => {
  return (
    <div className='mb-6 text-[36px] lg:text-[60px] font-secundary font-semibold uppercase leading-[1.2]'>
      <span className='mr-4'>soy </span>
      <TypeAnimation
        sequence={dataMyInfo.job}
        className='text-accent'
        wrapper='span'
        speed={50}
        repeat={Infinity}
      />
    </div>
  )
}
