'use client'
import { useState, useEffect } from 'react'

export default function TypeWriter({ text, speed = 45, onComplete }: { text: string; speed?: number; onComplete?: () => void }) {
  const [display, setDisplay] = useState('')
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplay(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
        onComplete?.()
      }
    }, speed)
    return () => clearInterval(timer)
  }, [text, speed, onComplete])
  return <>{display}<span className="cursor"> </span></>
}