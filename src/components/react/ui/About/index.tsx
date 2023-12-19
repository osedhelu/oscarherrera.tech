import { type FC } from 'react'
import { useInView } from 'react-intersection-observer'
import CountUp from '../CountUp'
import { dataMyInfo } from '@/config/myInfo'
import { motion } from 'framer-motion'
import { fadeIn } from '@/config/variants'
interface props {
  children?: React.ReactNode
}

export const Abouts: FC<props> = ({}) => {
  const [ref, inView] = useInView({
    threshold: 0.5
  })

  return (
    <div className='container mx-auto mt-[80px] lg:mt-[0px]' ref={ref}>
      <div className='flex flex-col gap-y-4 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[40px] lg:h-[400px] bg-top mix-blend-lighten'
        ></motion.div>
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'
        >
          <h2 className='text-[20px] lg:h2 text-accent'>About </h2>
          <h3 className='text-[15px] lg:h3 mb-4'>
            Yo soy un freelancer front-end developer com mas de 10 años de
            experiencia.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            dignissimos sapiente alias sit. Pariatur corporis ullam laborum quia
            quidem consequatur in tempore, alias minus molestiae obcaecati quas,
            labore autem omnis.
          </p>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            {dataMyInfo.experience.map(item => (
              <div key={item.title}>
                <div className='mt-3 text-5xl lg:text-[40px]  font-tertiary text-gradient mb2'>
                  {inView && <CountUp end={item.ano} start={0} />}
                </div>
                <div
                  className='font-primary text-sm tracking-[2px]'
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
              </div>
            ))}
          </div>
          <div className='flex gap-x-8  items-center'>
            <button className='btn btn-lg'>Contactame</button>
            <a className='text-gradient btn-link' href='#'>
              Mi portafolio
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
