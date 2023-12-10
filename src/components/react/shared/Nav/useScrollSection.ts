import { useState, useEffect } from 'react'

export const useScrollSection = () => {
  const [currentSection, setCurrentSection] = useState('')

  const handleScroll = () => {
    const sections = document.querySelectorAll('section')

    sections.forEach(section => {
      const sectionTop = section.offsetTop
      if (window?.pageYOffset >= sectionTop - 60) {
        setCurrentSection(section.getAttribute('id') as string)
      }
    })
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return currentSection
}
