'use client'

import { useRef, useState, MouseEvent, ReactNode } from 'react'
import Link from 'next/link'

interface Props {
  href: string
  children: ReactNode
  className?: string
  strength?: number
  radius?: number
}

export default function MagneticButton({ href, children, className = '', strength = 0.35, radius = 90 }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)

  const onMove = (e: MouseEvent) => {
    const el = wrapRef.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const cx = left + width / 2
    const cy = top + height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < radius) {
      setPos({ x: dx * strength, y: dy * strength })
      setActive(true)
    } else {
      setPos({ x: 0, y: 0 })
      setActive(false)
    }
  }

  const onLeave = () => {
    setPos({ x: 0, y: 0 })
    setActive(false)
  }

  return (
    <div ref={wrapRef} className="magnetic-wrap" onMouseMove={onMove} onMouseLeave={onLeave}>
      <Link
        href={href}
        className={`magnetic-inner block ${className}`}
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      >
        {children}
      </Link>
    </div>
  )
}
