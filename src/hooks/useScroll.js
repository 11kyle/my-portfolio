import { useEffect, useState } from "react"

export const useSroll = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
        // add class
      } else {
        setIsScrolled(false)
        // remove class
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return isScrolled
}