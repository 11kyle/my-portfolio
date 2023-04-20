import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useSroll } from "../hooks/useScroll"

const navigation = [
  { id: '01', name: 'About', href: 'about' },
  { id: '02', name: 'Projects', href: 'projects' },
  { id: '03', name: 'Small Projects', href: 'small-projects' },
  { id: '04', name: 'Skills', href: 'skills' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isScrolled = useSroll()

  const handleScroll = (id) => {
    const element = document.getElementById(id)
  
    setMobileMenuOpen(false)
    element.scrollIntoView({behavior: 'smooth'} )
  }

  return (
    <header
      className={classNames(
        isScrolled ? 'shadow-[0_0_10px_2px_rgba(0,0,0,0.3)]' : '',
        mobileMenuOpen ? '' : '',
        'sticky top-0 z-10 bg-broncos-navy'
      )}
    >
      <nav className="flex justify-between items-center h-20 px-6 md:px-8 mx-auto">
        <div>
          <a 
            href="/"
            className={classNames(
              isScrolled ? "hover:text-broncos-orange" : "hover:text-white",
              "font-bold text-2xl md:text-3xl font-exo-2 text-broncos-orange"
            )}
          >
            kj
          </a>
        </div>
        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-broncos-orange"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* Menu for non-mobile */}
        <div className="hidden md:flex md:gap-x-8">
          {navigation.map((item) => (
            <button 
              key={item.name} 
              onClick={() => handleScroll(item.href)} 
              className={classNames(
                isScrolled ? "hover:text-broncos-orange" : "hover:text-broncos-orange",
                "text-slate-400 text-xs"
              )}
            >
              <span className="text-broncos-orange">{item.id}. </span>
              {item.name}
            </button>
          ))}
        </div>
      </nav>
      {/* Mobile Menu Sidebar */}
      <Transition show={mobileMenuOpen}>
        <Dialog as="div" className="lg:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* <div className="fixed inset-0 z-50" /> */}
            <div className="fixed z-40 inset-0 bg-slate-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-broncos-navy px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-broncos-orange"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 text-center py-6">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleScroll(item.href)}
                        className="w-full flex flex-col items-center rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-slate-400 hover:bg-[#0D2D4E]"
                      >
                        <span className="text-broncos-orange">{item.id}.</span>
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  )
}