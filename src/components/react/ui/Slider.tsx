import { useEffect, useState } from 'react'
export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    'imagen1.jpg',
    'imagen2.jpg',
    'imagen3.jpg',
    'imagen4.jpg',
    'imagen5.jpg',
    'imagen6.jpg',
    'imagen7.jpg',
    'imagen8.jpg'
    // Agrega aquí las rutas de tus imágenes
  ]

  const nextSlide = () => {
    setCurrentIndex(prevIndex => prevIndex + 4)
  }

  const prevSlide = () => {
    setCurrentIndex(prevIndex => prevIndex - 4)
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 4) % images.length)
    }, 4000)

    return () => {
      clearInterval(interval)
    }
  }, [images.length])
  return (
    <div className='flex items-center justify-center'>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        Anterior
      </button>
      <div className='flex flex-wrap justify-center'>
        {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagen ${index + 1}`}
            className='w-1/4 p-2'
          />
        ))}
      </div>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={nextSlide}
        disabled={currentIndex >= images.length - 4}
      >
        Siguiente
      </button>
    </div>
  )
}
