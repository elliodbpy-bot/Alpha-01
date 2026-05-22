'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [langOpen, setLangOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(prev => (prev === menu ? null : menu))
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenSubmenu(null)
        setLangOpen(false)
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <header ref={headerRef}>
      <div className="container">
        <div className="navbar">
          {/* Logo */}
          <div className="logo">
            <div style={{ position: 'relative', width: '50px', height: '50px' }}>
              <Image
                src="/assets/images/monagas.png"
                alt="Escudo Monagas"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>

          {/* Botón hamburguesa (solo visible en móvil) */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          {/* Contenedor del menú + acciones */}
          <nav className={`nav-container ${mobileMenuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              <li className="menu-item">
                <button onClick={() => toggleSubmenu('inicio')} className="menu-link">
                  Inicio
                </button>
                <ul className={`submenu ${openSubmenu === 'inicio' ? 'active' : ''}`}>
                  <li><Link href="#">Dashboard</Link></li>
                  <li><Link href="#">Noticias recientes</Link></li>
                  <li><Link href="#">Destacados</Link></li>
                </ul>
              </li>
              <li className="menu-item">
                <button onClick={() => toggleSubmenu('nosotros')} className="menu-link">
                  Nosotros
                </button>
                <ul className={`submenu ${openSubmenu === 'nosotros' ? 'active' : ''}`}>
                  <li><Link href="#">Misión y Visión</Link></li>
                  <li><Link href="#">Naturaleza y Objetivos</Link></li>
                  <li><Link href="#">Valores institucionales</Link></li>
                </ul>
              </li>
              <li className="menu-item">
                <button onClick={() => toggleSubmenu('servicios')} className="menu-link">
                  Servicios
                </button>
                <ul className={`submenu ${openSubmenu === 'servicios' ? 'active' : ''}`}>
                  <li><Link href="#">Atención al ciudadano</Link></li>
                  <li><Link href="#">Trámites en línea</Link></li>
                  <li><Link href="#">Registro civil</Link></li>
                </ul>
              </li>
              <li className="menu-item">
                <button onClick={() => toggleSubmenu('tramites')} className="menu-link">
                  Trámites
                </button>
                <ul className={`submenu ${openSubmenu === 'tramites' ? 'active' : ''}`}>
                  <li><Link href="#">Licencias</Link></li>
                  <li><Link href="#">Permisos</Link></li>
                  <li><Link href="#">Certificados</Link></li>
                </ul>
              </li>
              <li className="menu-item">
                <button onClick={() => toggleSubmenu('contacto')} className="menu-link">
                  Contacto
                </button>
                <ul className={`submenu ${openSubmenu === 'contacto' ? 'active' : ''}`}>
                  <li><Link href="#">Teléfonos</Link></li>
                  <li><Link href="#">Correo institucional</Link></li>
                  <li><Link href="#">Ubicación</Link></li>
                </ul>
              </li>
            </ul>

            {/* Acciones de la derecha */}
            <div className="header-actions">
              <div className="custom-language-selector">
                <button onClick={() => setLangOpen(!langOpen)} className="lang-btn">
                  ES <i className="fas fa-chevron-down"></i>
                </button>
                <div className={`lang-dropdown ${langOpen ? 'active' : ''}`}>
                  <Link href="/">Español</Link>
                  <Link href="/en">English</Link>
                </div>
              </div>
              <div className="search-box">
                <input type="text" placeholder="Buscar..." />
                <button><i className="fas fa-search"></i></button>
              </div>
              <Link href="/login" className="login-btn">
                <i className="fas fa-user"></i> Iniciar sesión
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}