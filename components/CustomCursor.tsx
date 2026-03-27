'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const posRef  = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const rafRef  = useRef<number>(0)

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia('(pointer:coarse)').matches) return

    const dot  = dotRef.current!
    const ring = ringRef.current!

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      dot.style.left = `${e.clientX}px`
      dot.style.top  = `${e.clientY}px`
    }

    // Ring lags behind with lerp
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const tick = () => {
      ringPos.current.x = lerp(ringPos.current.x, posRef.current.x, 0.12)
      ringPos.current.y = lerp(ringPos.current.y, posRef.current.y, 0.12)
      ring.style.left = `${ringPos.current.x}px`
      ring.style.top  = `${ringPos.current.y}px`
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    // Hover state on interactive elements
    const hoverEls = () => document.querySelectorAll<HTMLElement>(
      'a, button, [role="button"], input, textarea, select, .tilt-card, .service-row'
    )
    const addHover = () => document.body.classList.add('cursor-hover')
    const rmHover  = () => document.body.classList.remove('cursor-hover')
    const addClick = () => { document.body.classList.add('cursor-click'); setTimeout(() => document.body.classList.remove('cursor-click'), 150) }

    const attach = () => hoverEls().forEach(el => { el.addEventListener('mouseenter', addHover); el.addEventListener('mouseleave', rmHover) })

    attach()
    // re-attach on DOM changes (e.g. modal open)
    const obs = new MutationObserver(attach)
    obs.observe(document.body, { childList: true, subtree: true })

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', addClick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', addClick)
      cancelAnimationFrame(rafRef.current)
      obs.disconnect()
    }
  }, [])

  return (
    <>
      <div id="cursor-dot"  ref={dotRef}  />
      <div id="cursor-ring" ref={ringRef} />
    </>
  )
}
