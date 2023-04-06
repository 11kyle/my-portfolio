import { useEffect, useRef, useState } from "react"

// const observer = new IntersectionObserver(entries => {
//   console.logaa(entries)
//   entries.forEach((entry) => {
//     const intersecting = entry.isIntersecting
//     if (intersecting) {
//       entry.target.classList.add("hidden")
//     } else {
//       entry.target.classList.remove("hidden")
//     }
    
//     // entry.target.style.backgroundColor = intersecting ? "blue" : "orange"
//     observer.unobserve(entry.target) // stop observing 
//     //discount method unobserves all entries
//   })
// }, { threshold: 0.10}) // threshold between 0-1
// // can also be an array like [0, .25, .5, .75, 1]

// observer.observe(document.getElementById("about"))



export const useElementOnScreen = (options) => {
  const containerRef = useRef(null)
  const [isVisible, setVisibility] = useState(false)

  const callbackFunction = (entries) => {
    const [entry] = entries
    setVisibility(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (containerRef.current) observer.observe(containerRef.current)

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef, options])

  return [containerRef, isVisible]
}