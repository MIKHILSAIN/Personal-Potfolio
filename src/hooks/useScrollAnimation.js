import { useEffect, useRef } from 'react'

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('visible')
        observer.unobserve(element)
      }
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px'
    })

    observer.observe(element)

    return () => observer.disconnect()
  }, [options])

  return ref
}
