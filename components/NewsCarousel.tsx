'use client'
import { useState, useEffect } from 'react'
import { noticias } from '@/lib/noticias'

const ITEMS_PER_PAGE = 3

export default function NewsCarousel() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = Math.ceil(noticias.length / ITEMS_PER_PAGE)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage(prev => (prev + 1) % totalPages)
    }, 8000)
    return () => clearInterval(interval)
  }, [totalPages])

  const start = currentPage * ITEMS_PER_PAGE
  const pageNews = noticias.slice(start, start + ITEMS_PER_PAGE)

  return (
    <div className="news-grid">
      {pageNews.map((noticia, idx) => (
        <div key={idx} className="news-card">
          <div className="card-image"><i className="fas fa-newspaper"></i></div>
          <div className="card-content">
            <span className="card-category">{noticia.categoria}</span>
            <h3 className="card-title">{noticia.titulo}</h3>
            <p className="card-excerpt">{noticia.resumen}</p>
            <a href={noticia.enlace} className="card-link">Leer más →</a>
          </div>
        </div>
      ))}
    </div>
  )
}