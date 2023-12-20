import { fadeIn } from '@/config/variants'
import { motion } from 'framer-motion'
import { type FC } from 'react'

interface props {
  children?: React.ReactNode
}

const services = [
  {
    date: '28 de Noviembre de 2014',
    title: 'Bachiller Academico',
    description:
      'Por razones de haber cursado y aprobado los estudios correspondientes al Nivel de Educación Media Académica, según los planes y programas vigentes de la Ley 115 y su decreto reglamentario.',
    link: {
      name: 'Leer mas',
      href: '#'
    }
  },
  {
    date: '21 de Obtubre de 2019',
    title: 'Servicio Nacional de Aprendizaje (SENA)',
    description:
      'tecnológico que destaca la importancia de utilizar el análisis y desarrollo de sistemas de información para convertir datos en soluciones tecnológicas que impulsen el éxito de las empresas.',
    link: {
      name: 'Leer mas',
      href: '#'
    }
  },
  {
    date: '23 de Noviembre de 2023',
    title: 'Politecnico grancolombiano',
    description: 'Ingenieria de software',
    link: {
      name: 'Leer mas',
      href: '#'
    }
  }
]
export const ServicesJSX: FC<props> = ({}) => {
  return (
    <div className='flex gap-x-10 flex-col lg:flex-row'>
      <div className=''>
        <div className='flex-1 lg:bg:bottom fill-blue-500'>
          <h2 className='h2 text-accent mb-6'>Educación</h2>
          <h3 className='h3 max-w-[455px] mb-16'>
            I help bring your vision to life
          </h3>
        </div>
        <div className='bg-services bg-contain bg-no-repeat h-[400px]'></div>
      </div>
      <div>
        <ol className='relative border-s border-gray-200 dark:border-gray-700'>
          {services.map((items, index) => {
            return (
              <li key={index} className='mb-10 ms-6 lg:w-[42rem]'>
                <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
                  <svg
                    className='w-2.5 h-2.5 text-blue-800 dark:text-blue-300'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                  </svg>
                </span>
                <h3 className='mb-1 text-lg font-semibold   text-gradient'>
                  {items.title}
                </h3>
                <time className='block mb-2 text-sm font-semibold leading-none  text-gray-400 dark:text-gray-500'>
                  {items.date}
                </time>
                <p className='text-base font-normal text-black dark:text-white '>
                  {items.description}
                </p>
                <a href={items.link.href} className='font-medium'>
                  {items.link.name}
                </a>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
