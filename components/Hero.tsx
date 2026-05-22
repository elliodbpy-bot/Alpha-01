'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import ParticlesBackground from './ParticlesBackground'
import TypeWriter from './TypeWriter'

const images = [
  '/assets/images/slide1.jpg',
  '/assets/images/slide2.jpg',
  '/assets/images/slide3.jpg',
  '/assets/images/slide4.jpg',
  '/assets/images/slide5.jpg'
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [titleDone, setTitleDone] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      <ParticlesBackground />
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-title">
            <TypeWriter
              text="Bienvenidos a la Gobernación del estado Monagas"
              speed={45}
              onComplete={() => setTitleDone(true)}
            />
          </div>
          {titleDone && (
            <div className="hero-description">
              <TypeWriter
                text="Gestión eficiente, desarrollo con identidad. Trabajamos por el futuro de nuestra gente con transparencia y cercanía ciudadana."
                speed={30}
              />
            </div>
          )}
          <button
            onClick={() => alert('Portal en construcción. Próximamente más servicios.')}
            className="btn-primary"
          >
            Conocer más <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <div className="hero-carousel">
          <Image
            src={images[currentImage]}
            alt="Carrusel"
            width={600}
            height={280}
            className="carousel-slide"
          />
          <div className="carousel-dots">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === currentImage ? 'active' : ''}`}
                onClick={() => setCurrentImage(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}