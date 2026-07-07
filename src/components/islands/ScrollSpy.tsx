import { useEffect } from 'react'
import { scrollSpySections } from '../../data/navigation'

export function ScrollSpy() {
  useEffect(() => {
    let observer: IntersectionObserver | null = null

    const setActive = (id: string | null) => {
      const navLinks = document.querySelectorAll<HTMLAnchorElement>('[data-nav-section]')
      navLinks.forEach((link) => {
        const match = !!id && link.dataset.navSection === id
        link.classList.toggle('nav-active', match)
        if (match) {
          link.setAttribute('aria-current', 'true')
        } else {
          link.removeAttribute('aria-current')
        }
      })
    }

    const init = () => {
      // cleanup prior observer before re-initializing (VT or re-entrancy)
      if (observer) {
        observer.disconnect()
        observer = null
      }

      const navLinks = document.querySelectorAll<HTMLAnchorElement>('[data-nav-section]')
      if (!navLinks.length) return

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            const id = entry.target.id
            setActive(id)
          })
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
      )

      scrollSpySections.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer!.observe(el)
      })

      // Set initial active state from hash on mount or after client navigation
      const hash = window.location.hash.replace(/^#/, '')
      if (hash && scrollSpySections.includes(hash)) {
        const el = document.getElementById(hash)
        if (el) {
          setActive(hash)
        }
      }
    }

    // Run on initial mount
    init()

    // Re-initialize observer and links after Astro ViewTransitions client nav
    const handlePageLoad = () => {
      init()
    }
    document.addEventListener('astro:page-load', handlePageLoad)

    // Handle direct hash changes (e.g. user nav or link clicks)
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '')
      if (hash && scrollSpySections.includes(hash)) {
        const el = document.getElementById(hash)
        if (el) {
          setActive(hash)
        }
      }
    }
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      if (observer) {
        observer.disconnect()
        observer = null
      }
      document.removeEventListener('astro:page-load', handlePageLoad)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return null
}

export default ScrollSpy