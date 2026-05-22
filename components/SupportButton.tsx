'use client'
import Image from 'next/image'

export default function SupportButton() {
  return (
    <div
      className="support-card"
      onClick={() =>
        alert(
          'Próximamente: Sistema de atención virtual. ¡Estamos trabajando para ofrecerte un mejor servicio!'
        )
      }
    >
      <Image
        src="/assets/images/bot.png"
        alt="Soporte técnico"
        width={48}
        height={48}
      />
      <div className="support-text">
        Soporte técnico aquí
        <small>Haz clic para abrir chat</small>
      </div>
    </div>
  )
}