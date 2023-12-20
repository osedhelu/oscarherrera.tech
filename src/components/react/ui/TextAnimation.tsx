import { dataMyInfo } from '@/config/myInfo'
import { type FC } from 'react'
import { TypeAnimation } from 'react-type-animation'

interface props {
  children?: React.ReactNode
}
export const TextAnimation: FC<props> = ({}) => {
  return (
    <>
      <span className='mr-4 text-3xl'>soy </span>
      <TypeAnimation
        sequence={dataMyInfo.job}
        className='text-accent text-3xl'
        wrapper='span' speed={50}
        repeat={Infinity}
      />
    </>
  )
}
