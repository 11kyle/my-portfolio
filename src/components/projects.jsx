import { useElementOnScreen } from "../hooks/useElementOnScreen";
import SectionHeading from "./section-heading";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Projects() {
  const [containerRef, isVisible] = useElementOnScreen({
    rootMargin: "-100px 0px",
    threshold: 0.0
  })

  return (
    <div 
      id="projects" 
      ref={containerRef} 
      className={classNames(
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3/4",
        "transition duration-700 py-10"
      )}
    >
      {/* Details section */}
      <section aria-labelledby="details-heading">
        <SectionHeading 
          title="Projects"
        />
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
          <div>
            <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">
              <img
                src="audiophile-desktop.png"
                alt="Drawstring top with elastic loop closure and textured interior padding."
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="mt-8 text-base text-primary-black tracking-wide">
              Full e-commerce website for audio products. Built with React and Next.js.
            </p>
            <div className="mt-3">
              <h4 className="text-lg font-exo-2 font-semibold">Developer Tools</h4>
              <ul>
                <li className="text-sm">React</li>
                <li className="text-sm">Next.js</li>
                <li className="text-sm">Prisma</li>
                <li className="text-sm">MongoDB</li>
                <li className="text-sm">Tailwind</li>
                <li className="text-sm">Lazy Loading</li>
                <li className="text-sm">Hooks</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">
              <img
                src="skilled-desktop.png"
                alt="Drawstring top with elastic loop closure and textured interior padding."
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="mt-8 text-base text-primary-black tracking-wide">
              Landing page for learning website. Built with Vue and Vite.
            </p>
            <div className="mt-3">
              <h4 className="text-lg font-exo-2 font-semibold">Developer Tools</h4>
              <ul>
                <li className="text-sm">Vue</li>
                <li className="text-sm">Vite</li>
                <li className="text-sm">Tailwind</li>
                <li className="text-sm">Lazy Loading</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg border">
              <img
                src="dictionary-desktop.png"
                alt="Drawstring top with elastic loop closure and textured interior padding."
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="mt-8 text-base text-primary-black tracking-wide">
              Interface for searching the dictionary. Light and dark modes. Three fonts variants. Built with Vue and Vite.
            </p>
            <div className="mt-3">
              <h4 className="text-lg font-exo-2 font-semibold">Developer Tools</h4>
              <ul>
                <li className="text-sm">Vue</li>
                <li className="text-sm">Vite</li>
                <li className="text-sm">Pinia (state management)</li>
                <li className="text-sm">Tailwind</li>
                <li className="text-sm">Axios</li>
                <li className="text-sm">Dictionary API</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">
              <img
                src="entertainment-desktop.png"
                alt="Drawstring top with elastic loop closure and textured interior padding."
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="mt-8 text-base text-primary-black tracking-wide">
              Netflix-like web app for searching and filtering movies and tv series. Built with Vue and Vite.
            </p>
            <div className="mt-3">
              <h4 className="text-lg font-exo-2 font-semibold">Developer Tools</h4>
              <ul>
                <li className="text-sm">Vue</li>
                <li className="text-sm">Vite</li>
                <li className="text-sm">Pinia (state management)</li>
                <li className="text-sm">Tailwind</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}