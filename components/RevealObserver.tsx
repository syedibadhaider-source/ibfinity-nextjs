'use client'

import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    const observe = () => {
      const els = document.querySelectorAll<HTMLElement>('.reveal:not(.visible)')
      if (!els.length) return
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('visible')
              obs.unobserve(e.target)
            }
          })
        },
        { threshold: 0.12 }
      )
      els.forEach(el => obs.observe(el))
      return obs
    }

    // Initial run
    const obs = observe()

    // Re-run if new .reveal elements get added (e.g. page nav)
    const mut = new MutationObserver(() => observe())
    mut.observe(document.body, { childList: true, subtree: true })

    return () => {
      obs?.disconnect()
      mut.disconnect()
    }
  }, [])

  return null
}
