'use client'
import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('section:not(#hero) .reveal')
    els.forEach(el => el.classList.add('hidden-reveal'))

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('hidden-reveal')
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' })

    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return null
}
