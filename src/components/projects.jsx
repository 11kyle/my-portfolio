import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline'
import { useElementOnScreen } from "../hooks/useElementOnScreen";
import SectionHeading from "./section-heading";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Projects() {
  const [containerRef, isVisible] = useElementOnScreen({
    rootMargin: "0px 0px -200px 0px",
    threshold: 0.0
  })

  return (
    <div 
      id="projects" 
      className="scroll-m-20"
    >
      {/* Details section */}
      <section 
        aria-labelledby="projects-heading"
        ref={containerRef} 
        className={classNames(
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          "transition duration-700 pt-20"
        )}
      >
        <SectionHeading 
          title="Projects"
          id="02"
        />

        <div className="relative mb-20 md:mb-40">
          {projects.map((project) => (
            <div key={project.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-[#0D2D4E] md:bg-inherit mb-6 last:mb-0 md:mb-40 group">
              <div className="relative col-span-6 group-even:md:order-2">
                <img
                  src={project.imgSrc}
                  alt={project.imgAlt}
                  className="object-cover object-center"
                />
                <div className="absolute md:hidden inset-0 bg-gradient-to-t from-[#0D2D4E]" />
              </div>
              <div className="col-span-6 group-odd:md:text-right px-6 md:px-0">
                {project.isFeatured &&
                  <p className="text-broncos-orange text-xs md:text-sm">Featured Project</p>
                }
                <h4 className="text-slate-200 text-xl md:text-2xl font-exo-2 font-bold">{project.name}</h4>
                <div className="md:bg-[#0D2D4E] md:rounded-lg md:shadow-lg text-slate-400 text-sm md:p-2 lg:p-4 my-4 md:my-6">
                  <p>{project.content}</p>
                </div>
                <div className="flex flex-wrap group-odd:md:justify-end gap-x-6 gap-y-2 text-xs text-slate-400">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="flex group-odd:md:justify-end my-6">
                  <span
                    className="text-slate-400 hover:text-broncos-orange transition duration-300"
                    aria-hidden="true"
                  >
                    <a href={project.repoHref} target="_blank">
                      <CodeBracketIcon className="w-5 h-5" />
                    </a>
                  </span>
                  <span
                    className="text-slate-400 hover:text-broncos-orange transition duration-300 ml-2"
                    aria-hidden="true"
                  >
                    <a href={project.liveHref} target="_blank">
                      <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>        

        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
          

          {/* <div>
            <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg border hover:brightness-75">
              <a href="https://11kyle.github.io/dictionary-web-app/">
                <img
                  src="dictionary-desktop.png"
                  alt="Drawstring top with elastic loop closure and textured interior padding."
                  className="h-full w-full object-cover object-center"
                />
              </a>
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
          </div> */}

          {/* <div>
            <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg hover:brightness-75">
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
          </div> */}
        </div>
      </section>
    </div>
  )
}

const projects = [
  {
    id: 1,
    name: "Hart InterCivic",
    content: "Multipage website for an election company. Built with Wordpress and Tailwind.",
    imgSrc: "hart-intercivic-desktop.png",
    imgAlt: "Hart InterCivic homepage",
    repoHref: "#",
    liveHref: "#",
    tech: ["Wordpress", "JQuery", "Tailwind", "Plugins"],
    isFeatured: true,
  },
  {
    id: 2,
    name: "Audiophile",
    content: "Full e-commerce website for audio products. Multi-page website. Built with React and Next.js.",
    imgSrc: "audiophile-desktop.png",
    imgAlt: "",
    repoHref: "https://github.com/11kyle/audiophile",
    liveHref: "#",
    tech: ["React", "Next.js", "Prisma", "MongoDB", "Tailwind"],
    isFeatured: true,
  },
  {
    id: 3,
    name: "Skilled Landing Page",
    content: "Landing page for e-learning website. Built with Vue and Vite.",
    imgSrc: "skilled-desktop.png",
    imgAlt: "",
    repoHref: "https://github.com/11kyle/skilled-landing-page",
    liveHref: "https://11kyle.github.io/skilled-landing-page/",
    tech: ["Vite", "Vue", "Tailwind"],
    isFeatured: true,
  },
]