import { type FC } from 'react'
import { TypeAnimation } from 'react-type-animation'

interface props {
  children?: React.ReactNode
}

export const BannerJsx: FC<props> = ({}) => {
  return (
    <div>
      <h1 className='text-3xl'>
        Oscar <span>Herrera Lugo</span>
      </h1>
      <div className='mb-6 text-[36px] lg:text-[60px]'>
        <TypeAnimation
          sequence={[
            'es un Android Developer',
            1000,
            'es un Backend Developer',
            1000,
            'ó un Frontend Developer',
            1000,
            'ó Full stack Developer',
            1000
          ]}
          className='text-accent'
          wrapper='span'
          speed={50}
          repeat={Infinity}
        />
      </div>
    </div>
  )
}
