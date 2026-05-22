'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // ---------- TRADUCCIONES ----------
    const translations: Record<string, any> = {
      es: {
        loading_sub: "Gobernación del estado Monagas",
        hero_title: "Bienvenidos a la Gobernación del estado Monagas",
        hero_desc: "Gestión eficiente, desarrollo con identidad. Trabajamos por el futuro de nuestra gente con transparencia y cercanía ciudadana.",
        hero_btn: "Conocer más",
        news_title: "Últimas noticias",
        services_title: "Secretarías y entes",
        directorio: "Directorio Protocolar",
        directorio_desc: "Autoridades y representantes",
        direcciones: "Direcciones",
        direcciones_desc: "Gestión administrativa",
        secretarias: "Secretarias",
        secretarias_desc: "Coordinación de políticas",
        institutos: "Institutos",
        institutos_desc: "Organismos autónomos",
        contacto_title: "¿Necesitas ayuda o información?",
        contacto_desc: "Estamos para servirte. Escríbenos o visita nuestras oficinas.",
        contacto_btn: "Atención al ciudadano",
        social_title: "Conoce más de nosotros",
        footer_text: "Gobernación del estado Monagas · Todos los derechos reservados © 2026",
        footer_sub: "Dirección de Ciencia, Tecnología e Innovación | Gestión con identidad",
        support_text: "Soporte técnico aquí",
        support_small: "Haz clic para abrir chat",
        menu_inicio: "Inicio",
        menu_nosotros: "Nosotros",
        menu_servicios: "Servicios",
        menu_tramites: "Trámites",
        menu_contacto: "Contacto",
        sub_inicio_dashboard: "Dashboard",
        sub_inicio_recientes: "Noticias recientes",
        sub_inicio_destacados: "Destacados",
        sub_nosotros_mision: "Misión y Visión",
        sub_nosotros_naturaleza: "Naturaleza y Objetivos",
        sub_nosotros_valores: "Valores institucionales",
        sub_servicios_atencion: "Atención al ciudadano",
        sub_servicios_tramites: "Trámites en línea",
        sub_servicios_registro: "Registro civil",
        sub_tramites_licencias: "Licencias",
        sub_tramites_permisos: "Permisos",
        sub_tramites_certificados: "Certificados",
        sub_contacto_telefonos: "Teléfonos",
        sub_contacto_correo: "Correo institucional",
        sub_contacto_ubicacion: "Ubicación",
        search_placeholder: "Buscar...",
        login_text: "Iniciar sesión",
        lang_es: "ES",
        lang_en: "EN",
        alert: "Portal en construcción. Próximamente más servicios.",
        noticias: [
          { categoria: "Infraestructura", titulo: "Rehabilitación de la Misión Sonrisa", resumen: "Mejoras en la infraestructura para atender más pacientes.", enlace: "#" },
          { categoria: "Educación", titulo: "Entrega de tablets a estudiantes destacados", resumen: "El gobernador encabezó la entrega de 500 equipos tecnológicos.", enlace: "#" },
          { categoria: "Salud", titulo: "Jornada médica gratuita en Maturín", resumen: "Más de 2.000 personas fueron atendidas.", enlace: "#" },
          { categoria: "Ambiente", titulo: "Reforestación en el Parque Nacional", resumen: "Se sembraron más de 5.000 árboles nativos.", enlace: "#" },
          { categoria: "Deportes", titulo: "Juegos estadales de atletismo", resumen: "Participaron atletas de los 13 municipios.", enlace: "#" },
          { categoria: "Cultura", titulo: "Festival de Música Llanera", resumen: "Evento gratuito con artistas locales y nacionales.", enlace: "#" },
          { categoria: "Seguridad", titulo: "Nuevo centro de monitoreo", resumen: "Modernización del sistema de vigilancia.", enlace: "#" },
          { categoria: "Vivienda", titulo: "Entrega de 300 viviendas", resumen: "Beneficiadas familias de bajos recursos.", enlace: "#" },
          { categoria: "Tecnología", titulo: "Nuevo sistema de gestión documental", resumen: "Digitalización de trámites internos para agilizar procesos.", enlace: "#" }
        ]
      },
      en: {
        loading_sub: "Government of Monagas State",
        hero_title: "Welcome to the Government of Monagas State",
        hero_desc: "Efficient management, development with identity. We work for the future of our people with transparency and citizen closeness.",
        hero_btn: "Learn more",
        news_title: "Latest news",
        services_title: "Secretariats and entities",
        directorio: "Directory of Authorities",
        directorio_desc: "Authorities and representatives",
        direcciones: "Directorates",
        direcciones_desc: "Administrative management",
        secretarias: "Secretariats",
        secretarias_desc: "Policy coordination",
        institutos: "Institutes",
        institutos_desc: "Autonomous organisms",
        contacto_title: "Need help or information?",
        contacto_desc: "We are here to serve you. Write to us or visit our offices.",
        contacto_btn: "Citizen service",
        social_title: "Learn more about us",
        footer_text: "Government of Monagas State · All rights reserved © 2026",
        footer_sub: "Directorate of Science, Technology and Innovation | Management with identity",
        support_text: "Technical support here",
        support_small: "Click to open chat",
        menu_inicio: "Home",
        menu_nosotros: "About Us",
        menu_servicios: "Services",
        menu_tramites: "Procedures",
        menu_contacto: "Contact",
        sub_inicio_dashboard: "Dashboard",
        sub_inicio_recientes: "Recent news",
        sub_inicio_destacados: "Highlights",
        sub_nosotros_mision: "Mission and Vision",
        sub_nosotros_naturaleza: "Nature and Objectives",
        sub_nosotros_valores: "Institutional values",
        sub_servicios_atencion: "Citizen service",
        sub_servicios_tramites: "Online procedures",
        sub_servicios_registro: "Civil registry",
        sub_tramites_licencias: "Licenses",
        sub_tramites_permisos: "Permits",
        sub_tramites_certificados: "Certificates",
        sub_contacto_telefonos: "Phone numbers",
        sub_contacto_correo: "Institutional email",
        sub_contacto_ubicacion: "Location",
        search_placeholder: "Search...",
        login_text: "Log in",
        lang_es: "ES",
        lang_en: "EN",
        alert: "Portal under construction. More services coming soon.",
        noticias: [
          { categoria: "Infrastructure", titulo: "Rehabilitation of Misión Sonrisa", resumen: "Infrastructure improvements to serve more patients.", enlace: "#" },
          { categoria: "Education", titulo: "Delivery of tablets to outstanding students", resumen: "The governor led the delivery of 500 technological devices.", enlace: "#" },
          { categoria: "Health", titulo: "Free medical day in Maturín", resumen: "More than 2,000 people were attended.", enlace: "#" },
          { categoria: "Environment", titulo: "Reforestation in the National Park", resumen: "Over 5,000 native trees were planted.", enlace: "#" },
          { categoria: "Sports", titulo: "State athletics games", resumen: "Athletes from 13 municipalities participated.", enlace: "#" },
          { categoria: "Culture", titulo: "Llanera Music Festival", resumen: "Free event with local and national artists.", enlace: "#" },
          { categoria: "Security", titulo: "New monitoring center", resumen: "Modernization of the surveillance system.", enlace: "#" },
          { categoria: "Housing", titulo: "Delivery of 300 homes", resumen: "Low-income families benefited.", enlace: "#" },
          { categoria: "Technology", titulo: "New document management system", resumen: "Digitization of internal procedures to speed up processes.", enlace: "#" }
        ]
      }
    }

    let currentLang: string = 'es'

    // ---------- PARTÍCULAS ----------
    let canvas: HTMLCanvasElement | null, ctx: CanvasRenderingContext2D | null
    let width = 0, height = 0
    let particles: any[] = []
    let mouse = { x: null as number | null, y: null as number | null, radius: 150 }
    let animationId: number | null = null

    function iniciarParticulas() {
      canvas = document.getElementById('particles-canvas') as HTMLCanvasElement
      if (!canvas) return
      ctx = canvas.getContext('2d')
      if (!ctx) return

      const PARTICLE_COUNT = 130
      function initParticles() {
        particles = []
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8,
            radius: Math.random() * 3 + 1.8,
            color: `hsl(${180 + Math.random() * 40}, 85%, 65%)`
          })
        }
      }

      function drawParticles() {
        if (!ctx) return
        ctx.clearRect(0, 0, width, height)
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x
            const dy = particles[i].y - particles[j].y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < 130) {
              ctx.beginPath()
              ctx.moveTo(particles[i].x, particles[i].y)
              ctx.lineTo(particles[j].x, particles[j].y)
              const opacity = 0.6 * (1 - dist / 130)
              ctx.strokeStyle = `rgba(116, 193, 235, ${opacity})`
              ctx.lineWidth = 1.3
              ctx.stroke()
              ctx.beginPath()
              ctx.moveTo(particles[i].x, particles[i].y)
              ctx.lineTo(particles[j].x, particles[j].y)
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.5})`
              ctx.lineWidth = 2.5
              ctx.stroke()
            }
          }
        }
        for (let p of particles) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
          ctx.fillStyle = p.color
          ctx.shadowBlur = 10
          ctx.shadowColor = "#74C1EB"
          ctx.fill()
          ctx.shadowBlur = 0
        }
      }

      function updateParticles() {
        for (let p of particles) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0) p.x = width
          if (p.x > width) p.x = 0
          if (p.y < 0) p.y = height
          if (p.y > height) p.y = 0
          if (mouse.x !== null && mouse.y !== null) {
            const dx = p.x - mouse.x
            const dy = p.y - mouse.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < mouse.radius) {
              const angle = Math.atan2(dy, dx)
              const force = (mouse.radius - dist) / mouse.radius
              p.x += Math.cos(angle) * force * 1.8
              p.y += Math.sin(angle) * force * 1.8
            }
          }
        }
      }

      function animateParticles() {
        updateParticles()
        drawParticles()
        animationId = requestAnimationFrame(animateParticles)
      }

      function resizeCanvas() {
        const hero = document.querySelector('.hero') as HTMLElement
        if (hero && canvas) {
          width = hero.clientWidth
          height = hero.clientHeight
          canvas.width = width
          canvas.height = height
          initParticles()
        }
      }

      window.addEventListener('resize', resizeCanvas)
      resizeCanvas()
      animateParticles()

      document.addEventListener('mousemove', (e) => {
        if (!canvas) return
        const rect = canvas.getBoundingClientRect()
        mouse.x = e.clientX - rect.left
        mouse.y = e.clientY - rect.top
      })
      document.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null })
    }

    // ---------- ESCRITURA ----------
    function iniciarAnimacionEscritura(lang: string) {
      const titleElement = document.getElementById('animated-title')
      const descElement = document.getElementById('animated-description')
      if (!titleElement) return
      const fullTitleText = translations[lang].hero_title
      const descText = translations[lang].hero_desc

      function typeWriter(element: HTMLElement, text: string, speed: number, onComplete?: () => void) {
        let i = 0
        element.innerHTML = ''
        const cursorSpan = document.createElement('span')
        cursorSpan.className = 'cursor'
        element.appendChild(cursorSpan)
        function addLetter() {
          if (i < text.length) {
            const currentText = element.innerHTML.replace(/<span class="cursor"><\/span>/, '')
            element.innerHTML = currentText + text.charAt(i) + '<span class="cursor"></span>'
            i++
            setTimeout(addLetter, speed)
          } else {
            element.innerHTML = element.innerHTML.replace('<span class="cursor"></span>', '')
            if (onComplete) onComplete()
          }
        }
        addLetter()
      }

      typeWriter(titleElement, fullTitleText, 45, () => {
        if (descElement) typeWriter(descElement, descText, 30)
      })
    }

    // ---------- CARRUSEL DE NOTICIAS ----------
    let newsInterval: ReturnType<typeof setInterval>
    let currentNewsPage = 0
    const itemsPerPage = 3
    let totalNewsPages = Math.ceil(translations.es.noticias.length / itemsPerPage)

    function renderNews(lang: string, animate: boolean = true) {
      const newsGrid = document.getElementById('newsGridContainer')
      if (!newsGrid) return
      const noticias = translations[lang].noticias
      const start = currentNewsPage * itemsPerPage
      const end = start + itemsPerPage
      const pageNews = noticias.slice(start, end)
      if (animate) {
        newsGrid.style.opacity = '0'
        newsGrid.style.transform = 'translateY(10px)'
        setTimeout(() => {
          newsGrid.innerHTML = pageNews.map((n: any) => `
            <div class="news-card">
              <div class="card-image"><i class="fas fa-newspaper"></i></div>
              <div class="card-content">
                <span class="card-category">${n.categoria}</span>
                <h3 class="card-title">${n.titulo}</h3>
                <p class="card-excerpt">${n.resumen}</p>
                <a href="${n.enlace}" class="card-link">Leer más →</a>
              </div>
            </div>
          `).join('')
          document.querySelectorAll('.news-card').forEach(card => {
            const htmlCard = card as HTMLElement
            htmlCard.style.animation = 'none'
            htmlCard.offsetHeight
            htmlCard.style.animation = 'fadeUp 0.5s ease forwards'
          })
          newsGrid.style.transition = 'opacity 0.3s ease, transform 0.3s ease'
          newsGrid.style.opacity = '1'
          newsGrid.style.transform = 'translateY(0)'
        }, 100)
      } else {
        newsGrid.innerHTML = pageNews.map((n: any) => `
          <div class="news-card">
            <div class="card-image"><i class="fas fa-newspaper"></i></div>
            <div class="card-content">
              <span class="card-category">${n.categoria}</span>
              <h3 class="card-title">${n.titulo}</h3>
              <p class="card-excerpt">${n.resumen}</p>
              <a href="${n.enlace}" class="card-link">Leer más →</a>
            </div>
          </div>
        `).join('')
        document.querySelectorAll('.news-card').forEach(card => {
          ;(card as HTMLElement).style.animation = 'fadeUp 0.5s ease forwards'
        })
      }
    }

    function nextNews() {
      currentNewsPage = (currentNewsPage + 1) % totalNewsPages
      renderNews(currentLang, true)
    }

    function startNewsAuto() {
      if (newsInterval) clearInterval(newsInterval)
      newsInterval = setInterval(nextNews, 8000)
    }

    // ---------- CARRUSEL PRINCIPAL, MENÚS, ETC ----------
    function iniciarCarruselesYDemas() {
      // Carrusel principal
      const imagenes = [
        "/assets/images/slide1.jpg",
        "/assets/images/slide2.jpg",
        "/assets/images/slide3.jpg",
        "/assets/images/slide4.jpg",
        "/assets/images/slide5.jpg"
      ]
      let currentIndex = 0
      const carouselImg = document.getElementById('carouselImage') as HTMLImageElement
      const dotsContainer = document.getElementById('carouselDots')
      let interval: ReturnType<typeof setInterval>

      function createDots() {
        if (!dotsContainer) return
        dotsContainer.innerHTML = ''
        imagenes.forEach((_, i) => {
          const dot = document.createElement('span')
          dot.classList.add('dot')
          if (i === currentIndex) dot.classList.add('active')
          dot.addEventListener('click', () => {
            clearInterval(interval)
            showImage(i)
            startAuto()
          })
          dotsContainer.appendChild(dot)
        })
      }

      function showImage(index: number) {
        currentIndex = index
        if (carouselImg) {
          carouselImg.style.opacity = '0'
          setTimeout(() => {
            carouselImg.src = imagenes[currentIndex]
            carouselImg.style.opacity = '1'
            updateDots()
          }, 300)
        }
      }

      function updateDots() {
        const dots = document.querySelectorAll('.dot')
        dots.forEach((dot, i) => {
          if (i === currentIndex) dot.classList.add('active')
          else dot.classList.remove('active')
        })
      }

      function nextImage() {
        let newIndex = currentIndex + 1
        if (newIndex >= imagenes.length) newIndex = 0
        showImage(newIndex)
      }

      function startAuto() {
        if (interval) clearInterval(interval)
        interval = setInterval(nextImage, 6000)
      }

      if (imagenes.length > 0 && carouselImg) {
        carouselImg.src = imagenes[0]
        createDots()
        startAuto()
        carouselImg.style.transition = 'opacity 0.5s ease'
      }

      // Noticias
      totalNewsPages = Math.ceil(translations[currentLang].noticias.length / itemsPerPage)
      renderNews(currentLang, false)
      startNewsAuto()

      // Scroll reveal
      const elements = document.querySelectorAll('.service-item, .contacto, .social-footer')
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.2 })
      elements.forEach(el => {
        el.classList.add('fade-up')
        observer.observe(el)
      })

      // Botones
      document.getElementById('heroBtn')?.addEventListener('click', (e) => {
        e.preventDefault()
        alert(translations[currentLang].alert)
      })
      document.getElementById('loginRedirectBtn')?.addEventListener('click', (e) => {
        e.preventDefault()
        window.location.href = '/login'
      })

      // Soporte
      const supportBtn = document.getElementById('supportBtn')
      supportBtn?.addEventListener('click', () => {
        alert(translations[currentLang].alert)
      })

      // Menús desplegables
      function closeAllSubmenus(exceptId: string | null = null) {
        document.querySelectorAll('.submenu').forEach(sub => {
          if (exceptId === null || sub.id !== exceptId) {
            sub.classList.remove('active')
          }
        })
      }

      function toggleSubmenu(button: HTMLButtonElement) {
        const parentLi = button.closest('.menu-item')
        if (!parentLi) return
        const targetSubmenu = parentLi.querySelector('.submenu')
        if (!targetSubmenu) return
        if (targetSubmenu.classList.contains('active')) {
          targetSubmenu.classList.remove('active')
        } else {
          closeAllSubmenus()
          targetSubmenu.classList.add('active')
        }
      }

      const menuButtons = document.querySelectorAll('.menu-link')
      menuButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.stopPropagation()
          toggleSubmenu(button as HTMLButtonElement)
        })
      })

      document.addEventListener('click', function(e) {
        const isClickInsideMenu = (e.target as Element).closest('.menu-item')
        if (!isClickInsideMenu) {
          closeAllSubmenus()
        }
      })

      const submenuLinks = document.querySelectorAll('.submenu a')
      submenuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault()
          const texto = link.textContent || ''
          alert(`${translations[currentLang].alert.split('.')[0]}: ${texto}`)
          closeAllSubmenus()
        })
      })
    }

    // ---------- TRADUCCIÓN COMPLETA DE LA PÁGINA ----------
    function translatePage(lang: string) {
      currentLang = lang
      localStorage.setItem('preferredLang', lang)

      // Hero
      const heroTitle = document.getElementById('animated-title')
      const heroDesc = document.getElementById('animated-description')
      if (heroTitle) heroTitle.innerHTML = ''
      if (heroDesc) heroDesc.innerHTML = ''
      iniciarAnimacionEscritura(lang)

      const heroBtn = document.getElementById('heroBtn')
      if (heroBtn) heroBtn.innerHTML = `${translations[lang].hero_btn} <i class="fas fa-arrow-right"></i>`

      // Títulos de secciones
      const sectionTitles = document.querySelectorAll('.section-title')
      if (sectionTitles[0]) sectionTitles[0].textContent = translations[lang].news_title
      if (sectionTitles[1]) sectionTitles[1].textContent = translations[lang].services_title

      // Servicios
      const serviceItems = document.querySelectorAll('.service-item')
      if (serviceItems.length >= 4) {
        serviceItems[0].querySelector('h3')!.textContent = translations[lang].directorio
        serviceItems[0].querySelector('p')!.textContent = translations[lang].directorio_desc
        serviceItems[1].querySelector('h3')!.textContent = translations[lang].direcciones
        serviceItems[1].querySelector('p')!.textContent = translations[lang].direcciones_desc
        serviceItems[2].querySelector('h3')!.textContent = translations[lang].secretarias
        serviceItems[2].querySelector('p')!.textContent = translations[lang].secretarias_desc
        serviceItems[3].querySelector('h3')!.textContent = translations[lang].institutos
        serviceItems[3].querySelector('p')!.textContent = translations[lang].institutos_desc
      }

      // Contacto
      const contacto = document.querySelector('.contacto')
      if (contacto) {
        contacto.querySelector('h2')!.textContent = translations[lang].contacto_title
        contacto.querySelector('p')!.textContent = translations[lang].contacto_desc
        const btnSecondary = contacto.querySelector('.btn-secondary')
        if (btnSecondary) btnSecondary.innerHTML = `${translations[lang].contacto_btn} <i class="fas fa-chevron-right"></i>`
      }

      // Redes sociales
      const socialFooterTitle = document.querySelector('.social-footer h3')
      if (socialFooterTitle) socialFooterTitle.textContent = translations[lang].social_title

      // Footer
      const footer = document.querySelector('footer')
      if (footer) {
        const p1 = footer.querySelector('p:first-child')
        if (p1) p1.textContent = translations[lang].footer_text
        const p2 = footer.querySelector('p:last-child')
        if (p2) p2.textContent = translations[lang].footer_sub
      }

      // Soporte técnico
      const supportText = document.querySelector('.support-text')
      if (supportText) {
        supportText.innerHTML = `${translations[lang].support_text}<small>${translations[lang].support_small}</small>`
      }

      // Menús principales
      const menuButtons = document.querySelectorAll('.menu-link')
      const menuKeys = ['menu_inicio', 'menu_nosotros', 'menu_servicios', 'menu_tramites', 'menu_contacto']
      menuButtons.forEach((btn, idx) => {
        if (idx < menuKeys.length) btn.textContent = translations[lang][menuKeys[idx]]
      })

      // Submenús
      const submenuItems: Record<string, string[]> = {
        'submenu-inicio': ['sub_inicio_dashboard', 'sub_inicio_recientes', 'sub_inicio_destacados'],
        'submenu-nosotros': ['sub_nosotros_mision', 'sub_nosotros_naturaleza', 'sub_nosotros_valores'],
        'submenu-servicios': ['sub_servicios_atencion', 'sub_servicios_tramites', 'sub_servicios_registro'],
        'submenu-tramites': ['sub_tramites_licencias', 'sub_tramites_permisos', 'sub_tramites_certificados'],
        'submenu-contacto': ['sub_contacto_telefonos', 'sub_contacto_correo', 'sub_contacto_ubicacion']
      }
      for (const [subId, keys] of Object.entries(submenuItems)) {
        const subUl = document.getElementById(subId)
        if (subUl) {
          const links = subUl.querySelectorAll('a')
          links.forEach((link, i) => {
            if (i < keys.length) link.textContent = translations[lang][keys[i]]
          })
        }
      }

      // Header actions
      const langBtn = document.getElementById('langBtn')
      if (langBtn) langBtn.innerHTML = `${translations[lang].lang_es} <i class="fas fa-chevron-down"></i>`
      const searchInput = document.querySelector('.search-box input') as HTMLInputElement
      if (searchInput) searchInput.placeholder = translations[lang].search_placeholder
      const loginBtn = document.getElementById('loginRedirectBtn')
      if (loginBtn) loginBtn.innerHTML = `<i class="fas fa-user"></i> ${translations[lang].login_text}`

      // Noticias: detener intervalo y regenerar
      if (newsInterval) clearInterval(newsInterval)
      totalNewsPages = Math.ceil(translations[lang].noticias.length / itemsPerPage)
      currentNewsPage = 0
      renderNews(lang, true)
      startNewsAuto()
    }

    // ---------- INICIALIZACIÓN ----------
    const timer = setTimeout(() => {
      const loadingScreen = document.getElementById('loading-screen')
      const mainContent = document.getElementById('main-content')
      if (loadingScreen && mainContent) {
        loadingScreen.style.opacity = '0'
        setTimeout(() => {
          loadingScreen.style.display = 'none'
          mainContent.style.display = 'block'
          iniciarParticulas()
          iniciarAnimacionEscritura(currentLang)
          iniciarCarruselesYDemas()

          // Configurar selector de idioma
          const langBtn = document.getElementById('langBtn')
          const langDropdown = document.getElementById('langDropdown')
          if (langBtn && langDropdown) {
            const esLink = langDropdown.querySelector('a[href="/"]')
            const enLink = langDropdown.querySelector('a[href="/en"]')
            if (esLink) {
              esLink.removeAttribute('href')
              esLink.addEventListener('click', (e) => {
                e.preventDefault()
                translatePage('es')
                langDropdown.classList.remove('active')
                langBtn.innerHTML = `ES <i class="fas fa-chevron-down"></i>`
              })
            }
            if (enLink) {
              enLink.removeAttribute('href')
              enLink.addEventListener('click', (e) => {
                e.preventDefault()
                translatePage('en')
                langDropdown.classList.remove('active')
                langBtn.innerHTML = `EN <i class="fas fa-chevron-down"></i>`
              })
            }
            langBtn.addEventListener('click', (e) => {
              e.stopPropagation()
              langDropdown.classList.toggle('active')
            })
            document.addEventListener('click', (e) => {
              if (!langBtn.contains(e.target as Node) && !langDropdown.contains(e.target as Node)) {
                langDropdown.classList.remove('active')
              }
            })
          }

          // Cargar idioma guardado (solo si es inglés, por defecto español)
          const savedLang = localStorage.getItem('preferredLang')
          if (savedLang === 'en') {
            translatePage('en')
          }
        }, 800)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // ---------- HTML ESTÁTICO (contenido inicial en español) ----------
  const htmlContent = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <div id="loading-screen">
      <div class="loader-modern">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="loading-text-modern">
        <span>C</span><span>a</span><span>r</span><span>g</span><span>a</span><span>n</span><span>d</span><span>o</span>
      </div>
      <div class="loading-sub">Gobernación del estado Monagas</div>
    </div>
    <div id="main-content" style="display: none;">
      <header>
        <div class="container">
          <div class="navbar">
            <div class="logo"><img src="/assets/images/monagas.png" alt="Escudo Monagas"></div>
            <ul class="nav-links">
              <li class="menu-item"><button class="menu-link">Inicio</button><ul class="submenu" id="submenu-inicio"><li><a href="#">Dashboard</a></li><li><a href="#">Noticias recientes</a></li><li><a href="#">Destacados</a></li></ul></li>
              <li class="menu-item"><button class="menu-link">Nosotros</button><ul class="submenu" id="submenu-nosotros"><li><a href="#">Misión y Visión</a></li><li><a href="#">Naturaleza y Objetivos</a></li><li><a href="#">Valores institucionales</a></li></ul></li>
              <li class="menu-item"><button class="menu-link">Servicios</button><ul class="submenu" id="submenu-servicios"><li><a href="#">Atención al ciudadano</a></li><li><a href="#">Trámites en línea</a></li><li><a href="#">Registro civil</a></li></ul></li>
              <li class="menu-item"><button class="menu-link">Trámites</button><ul class="submenu" id="submenu-tramites"><li><a href="#">Licencias</a></li><li><a href="#">Permisos</a></li><li><a href="#">Certificados</a></li></ul></li>
              <li class="menu-item"><button class="menu-link">Contacto</button><ul class="submenu" id="submenu-contacto"><li><a href="#">Teléfonos</a></li><li><a href="#">Correo institucional</a></li><li><a href="#">Ubicación</a></li></ul></li>
            </ul>
            <div class="header-actions">
              <div class="custom-language-selector"><button class="lang-btn" id="langBtn">ES <i class="fas fa-chevron-down"></i></button><div class="lang-dropdown" id="langDropdown"><a href="/">Español</a><a href="/en">English</a></div></div>
              <div class="search-box"><input type="text" placeholder="Buscar..."><button><i class="fas fa-search"></i></button></div>
              <a href="/login" class="login-btn" id="loginRedirectBtn"><i class="fas fa-user"></i> Iniciar sesión</a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section class="hero"><canvas id="particles-canvas"></canvas><div class="container hero-grid"><div class="hero-content"><div class="hero-title" id="animated-title"></div><div class="hero-description" id="animated-description"></div><a href="#" class="btn-primary" id="heroBtn">Conocer más <i class="fas fa-arrow-right"></i></a></div><div class="hero-carousel"><img id="carouselImage" class="carousel-slide" src="/assets/images/slide1.jpg" alt="Carrusel"><div class="carousel-dots" id="carouselDots"></div></div></div></section>
        <div class="container"><h2 class="section-title">Últimas noticias</h2><div class="news-carousel"><div id="newsGridContainer" class="news-grid"></div></div></div>
        <div class="container"><h2 class="section-title">Secretarías y entes</h2><div class="services-grid"><div class="service-item"><i class="fas fa-address-card"></i><h3>Directorio Protocolar</h3><p>Autoridades y representantes</p></div><div class="service-item"><i class="fas fa-building"></i><h3>Direcciones</h3><p>Gestión administrativa</p></div><div class="service-item"><i class="fas fa-users"></i><h3>Secretarias</h3><p>Coordinación de políticas</p></div><div class="service-item"><i class="fas fa-university"></i><h3>Institutos</h3><p>Organismos autónomos</p></div></div></div>
        <div class="container"><div class="contacto"><i class="fas fa-envelope" style="font-size:2rem;margin-bottom:0.8rem"></i><h2>¿Necesitas ayuda o información?</h2><p>Estamos para servirte. Escríbenos o visita nuestras oficinas.</p><a href="#" class="btn-secondary">Atención al ciudadano <i class="fas fa-chevron-right"></i></a></div></div>
      </main>
      <div class="social-footer"><h3>Conoce más de nosotros</h3><div class="social-icons"><a href="#" class="social-icon" target="_blank"><i class="fab fa-instagram"></i></a><a href="#" class="social-icon" target="_blank"><i class="fab fa-twitter"></i></a><a href="#" class="social-icon" target="_blank"><i class="fab fa-facebook-f"></i></a><a href="#" class="social-icon" target="_blank"><i class="fab fa-tiktok"></i></a></div></div>
      <footer><p>Gobernación del estado Monagas · Todos los derechos reservados © 2026</p><p style="margin-top:0.4rem">Dirección de Ciencia, Tecnología e Innovación | Gestión con identidad</p></footer>
    </div>
    <div class="support-card" id="supportBtn"><img src="/assets/images/bot.png" alt="Soporte técnico"><div class="support-text">Soporte técnico aquí<small>Haz clic para abrir chat</small></div></div>
  `

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
}