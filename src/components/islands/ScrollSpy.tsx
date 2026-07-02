import { useEffect } from 'react'

const sections = ['bridge', 'network', 'ai', 'process', 'contact']

export function ScrollSpy() {
  useEffect(() => {
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('[data-nav-section]')
    if (!navLinks.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const id = entry.target.id
          navLinks.forEach((link) => {
            const match = link.dataset.navSection === id
            link.classList.toggle('nav-active', match)
            if (match) link.setAttribute('aria-current', 'true')
            else link.removeAttribute('aria-current')
          })
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return null
}

export default ScrollSpy