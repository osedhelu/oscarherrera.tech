import { dataMyInfo } from '@/config/myInfo'
import { fadeIn } from '@/config/variants'
import { motion } from 'framer-motion'
import { type FC } from 'react'
import { useInView } from 'react-intersection-observer'
import CountUp from '../CountUp'
import style from './About.module.css'
import { skills_backend, skills_frontend, skills_languages } from './logos'
import { useTranslations } from '@/i18n/utils'
interface props {
  children?: React.ReactNode
}

export const Abouts: FC<props> = ({}) => {
  const [ref, inView] = useInView({
    threshold: 0.5
  })

  const t = useTranslations({ state: 'react' })
  return (
    <div className='container mx-auto mt-[80px] lg:mt-[0px]' ref={ref}>
      <div className='flex flex-col gap-y-4 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen overflow-hidden'>
        <motion.div
          variants={fadeIn('right', 0.03)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.03 }}
          className={`flex-1 ${style.img_border} bg-about bg-contain bg-no-repeat h-[10px] lg:h-[400px] bg-top  `}
        ></motion.div>
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'
        >
          <h2 className='text-[20px] lg:h2 text-accent'>
            {t(dataMyInfo.titleAbout)}
          </h2>
          <h3 className='text-[15px] lg:h3 mb-4'>{t('about.description')}</h3>
          <p>{t(dataMyInfo.description2)}</p>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            {dataMyInfo.experience.map(item => (
              <div key={item.title}>
                <div className='mt-3 text-5xl lg:text-[40px]  font-tertiary text-gradient mb2'>
                  {inView && <CountUp end={item.ano} start={0} />}
                </div>
                <div
                  className='font-primary text-sm tracking-[2px]'
                  dangerouslySetInnerHTML={{ __html: t(item.title) }}
                />
              </div>
            ))}
          </div>
          <p>{t('about.title.1')}</p>
          <div className='flex gap-x-1 mb-[10px] '>
            {Object.values(skills_languages).map((IconSvg, index) => (
              <IconSvg key={`32${index}`} className='w-8 h-8' />
            ))}
          </div>
          <p>{t('about.title.2')}</p>
          <div className='flex gap-x-1 mb-[10px] '>
            {Object.values(skills_backend).map((IconSvg, index) => (
              <IconSvg key={`12${index}`} className='w-8 h-8' />
            ))}
          </div>
          <p>{t('about.title.3')}</p>
          <div className='flex gap-x-1 mb-[80px] '>
            {Object.values(skills_frontend).map((IconSvg, index) => (
              <IconSvg key={`22${index}`} className='w-8 h-8' />
            ))}
          </div>

          <div className='flex gap-x-8  items-center'>
            <button className='btn btn-lg'>{t('banner.contact')}</button>
            <a className='text-gradient btn-link' href='#'>
              {t('banner.portfolio')}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
