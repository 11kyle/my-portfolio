import { ChevronRightIcon } from '@heroicons/react/20/solid'
import kj from "../assets/kj-thumbnail.jpg"

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-primary-orange">
      <div className="mx-auto max-w-5xl px-6 md:px-8 pt-10 pb-24 sm:pb-32 lg:flex">
        <div className="flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <p className="text-lg text-primary-black">
            Hi, my name is
          </p>
          <h1 className="uppercase font-exo-2 text-6xl font-bold tracking-tight text-primary-black">
            Kyle Johnson
          </h1>
          <p className="text-lg text-primary-black">
          Frontend Web Developer
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a href="#" className="text-sm text-primary-black">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        {/* <div>
          <div className="w-80 h-80 rounded-full overflow-hidden">
            <img src={kj} className="object-cover" />
          </div>
        </div> */}
        {/* <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div> */}
      </div>
    </div>
  )
}
