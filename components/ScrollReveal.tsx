'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3 | 4 | 5
  as?: keyof JSX.IntrinsicElements
}

export default function ScrollReveal({ children, className = '', delay = 0, as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const delayClass = delay ? `reveal-delay-${delay}` : ''

  return (
    // @ts-ignore
    <Tag ref={ref} className={`reveal ${delayClass} ${className}`}>
      {children}
    </Tag>
  )
}
