import { NavData } from '@/config/navData'
import { type FC } from 'react'
import { SvgComponent } from '../../ui/Logo'
import { useScrollSection } from './useScrollSection'
interface props {
  children?: React.ReactNode
}

export const Navjsx: FC<props> = ({}) => {
  const currentSection = useScrollSection()
  return (
    <div className='fixed bottom-2 z-50 lg:bottom-8 w-full overflow-hidden'>
      <div className='container mx-auto'>
        <div className='flex bg-black/50 mx-auto max-w-[460px] px-5 rounded-full backdrop-blur-sm justify-between items-center'>
          {NavData.map(item => (
            <a
              key={item.path}
              href={`#${item.path}`}
              className={`w-[60px] h-[60px] flex items-center ${
                currentSection === item.path ? 'active' : 'p-4'
              }`}
            >
              <SvgComponent
                nameIcon={item.Icon}
                props={{
                  className: 'stroke-white w-[30px] h-[30px] fill-white'
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
