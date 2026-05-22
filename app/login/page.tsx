'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SupportButton from '@/components/SupportButton'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí irá tu lógica de autenticación
    console.log('Login con', email, password)
  }

  return (
    <>
      <Header />
      <main className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[var(--gris-azulado)] to-[rgba(116,193,235,0.2)]">
        <div className="w-full max-w-md mx-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-[var(--gris-azulado)]">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-extrabold text-[var(--azul-profundo)] mb-2">
                Iniciar sesión
              </h1>
              <p className="text-sm text-gray-500">
                Portal de la Gobernación del estado Monagas
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-[var(--azul-profundo)] mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="usuario@monagas.gob.ve"
                  className="w-full px-4 py-3 border border-[var(--gris-azulado)] rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[var(--celeste)] focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--azul-profundo)] mb-1">
                  Contraseña
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-[var(--gris-azulado)] rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[var(--celeste)] focus:border-transparent transition"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center text-base py-3"
              >
                Acceder <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              ¿Olvidaste tu contraseña?{' '}
              <a href="#" className="text-[var(--azul-profundo)] font-semibold hover:underline">
                Recuperar
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <SupportButton />
    </>
  )
}