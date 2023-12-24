import { dataMyInfo } from '@/config/myInfo'
import { useTranslations } from '@/i18n/utils'
import { type FC } from 'react'
import { TypeAnimation } from 'react-type-animation'

interface props {
  children?: React.ReactNode
}
export const TextAnimation: FC<props> = ({}) => {
  const t = useTranslations({ state: 'react' })
  return (
    <>
      <span className='mr-4 text-[20px] lg:text-3xl'>soy </span>
      <TypeAnimation
        sequence={dataMyInfo.job.map((item, index) =>
          typeof item === 'string' ? t(item as any) : item
        )}
        className='text-accent text-[20px] lg:text-3xl'
        wrapper='span'
        speed={50}
        repeat={Infinity}
      />
    </>
  )
}
