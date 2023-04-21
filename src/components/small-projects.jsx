import {
  FolderIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline'
import SectionHeading from './section-heading'
import { useElementOnScreen } from "../hooks/useElementOnScreen"

const actions = [
  {
    title: 'Dictionary web app',
    content: 'Interface for searching the dictionary. Includes a dark mode and three fonts variants.',
    repoHref: 'https://github.com/11kyle/dictionary-web-app',
    liveHref: 'https://11kyle.github.io/dictionary-web-app/',
    icon: FolderIcon,
    tech: ['HTML5', 'CSS3', 'JS', 'API'],
  },
  {
    title: 'NFT preview card component',
    content: 'A beautiful, pixel-perfect display for NFTs. Utilizing a complimentary color pallete and added hover effects.',
    repoHref: 'https://github.com/11kyle/nft-preview-card',
    liveHref: 'https://11kyle.github.io/nft-preview-card/',
    icon: FolderIcon,
    tech: ['HTML5', 'CSS3'],
  },
  {
    title: 'Advice generator app',
    content: 'Get a random piece of advice from the Advive Slip API.',
    repoHref: 'https://github.com/11kyle/advice-generator',
    liveHref: 'https://11kyle.github.io/advice-generator/',
    icon: FolderIcon,
    tech: ['HTML', 'CSS3', 'JS', 'API'],
  },
  {
    title: 'Age calculator app',
    content: 'For those who wonder how old they are to the day, month, and year. Including form validation, unit tests, and end-2-end tests.',
    repoHref: 'https://github.com/11kyle/age-calculator',
    liveHref: 'https://11kyle.github.io/age-calculator/',
    icon: FolderIcon,
    tech: ['HTML5', 'CSS3', 'JS', 'React', 'vitest', 'Cypress'],
  },
  {
    title: 'Interactive rating component',
    content: 'Collect user ratings with this interactive component. A two-view layout for displaying active and submitted states.',
    repoHref: 'https://github.com/11kyle/interactive-rating',
    liveHref: 'https://11kyle.github.io/interactive-rating/',
    icon: FolderIcon,
    tech: ['HTML5', 'CSS3', 'JS', 'React'],
  },
  // {
  //   title: 'QR code component',
  //   content: 'A simple static component for displaying a qr code with descriptive title and text.',
  //   repoHref: 'https://github.com/11kyle/qr-code',
  //   liveHref: 'https://11kyle.github.io/qr-code/',
  //   icon: FolderIcon,
  //   tech: ['HTML5', 'CSS3'],
  // },
  {
    title: 'Job listings with filtering',
    content: 'Great use of filtering in javascript. Set up with JSON data but can be updated to a full-stack application.',
    repoHref: 'https://github.com/11kyle/job-listings-filter',
    liveHref: 'https://11kyle.github.io/job-listings-filter/',
    icon: FolderIcon,
    tech: ['HTML5', 'CSS3', 'JS', 'React', 'JSON'],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SmallProjects() {
  const [containerRef, isVisible] = useElementOnScreen({
    rootMargin: "0px 0px -200px 0px",
    threshold: 0.0
  })

  return (
    <div 
      id="small-projects" 
      className="scroll-m-20 mb-40"
    >
      {/* Details section */}
      <section 
        aria-labelledby="details-heading"
        ref={containerRef} 
        className={classNames(
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          "transition duration-700 pt-20"
        )}
      >
        <SectionHeading 
          title="Additional Projects"
          id="03"
        />
        <div className="bg-broncos-navy grid grid-cols-1 sm:grid-cols-2 gap-1">
          {actions.map((action, actionIdx) => (
            <div
              key={action.title}
              className={classNames(
                actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                'group bg-white bg-opacity-5 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-slate-400'
              )}
            >
              <div className='flex items-center'>
                <span
                  className="text-broncos-orange"
                >
                  <action.icon className="h-10 w-10" aria-hidden="true" />
                </span>
                <span
                  className="text-slate-400 hover:text-broncos-orange transition duration-300 ml-auto"
                  aria-hidden="true"
                >
                  <a href={action.repoHref} target="_blank">
                    <CodeBracketIcon className="w-5 h-5" />
                  </a>
                </span>
                <span
                  className="text-slate-400 hover:text-broncos-orange transition duration-300 ml-2"
                  aria-hidden="true"
                >
                  <a href={action.liveHref} target="_blank">
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                  </a>
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-bold font-exo-2 text-slate-200 group-hover:text-primary-orange transition duration-300">
                  {action.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  {action.content}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {action.tech.map((t) => (
                    <span key={t} className="bg-broncos-navy rounded text-xs text-slate-400 px-1">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}