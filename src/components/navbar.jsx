import { useState, Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useSroll } from "../hooks/useScroll"

const navigation = [
  { id: "01", name: "About", href: "about" },
  { id: "02", name: "Projects", href: "projects" },
  { id: "03", name: "Small Projects", href: "small-projects" },
  { id: "04", name: "Skills", href: "skills" },
]

const socials = [
  {
    name: 'GitHub',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="25" height="24" {...props}>
        <path 
          fillRule="evenodd" 
          d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="25" height="24" {...props}>
        <path 
          fillRule="evenodd" 
          d="M5.551 3.304c-1.14 0-2.067.926-2.067 2.064 0 1.14.928 2.066 2.067 2.066a2.066 2.066 0 0 0 0-4.13ZM3.767 8.998v11.453h3.562L7.33 8.998H3.767Zm5.798 0V20.45l3.554.002.002-5.668c0-1.454.253-2.941 2.132-2.941 1.851 0 1.851 1.755 1.851 3.036v5.571l3.559-.001v-6.28c0-2.834-.517-5.457-4.27-5.457-1.763 0-2.916.997-3.368 1.85h-.05V8.997h-3.41ZM22.435 24H1.982c-.976 0-1.77-.777-1.77-1.732V1.731C.212.776 1.006 0 1.982 0h20.453c.98 0 1.777.776 1.777 1.73v20.538c0 .955-.797 1.732-1.777 1.732Z"
        />
      </svg>
    ),
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isScrolled = useSroll()

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const handleScroll = (id) => {
    const element = document.getElementById(id)
    element.scrollIntoView({ behavior: "smooth" })
  }

  const handleMobileScrollWithDelay = (id) => {
    setMobileMenuOpen(false)
    // Wait for the mobile menu close animation to finish before scrolling page
    setTimeout(() => {
      const element = document.getElementById(id)
      element.scrollIntoView({ behavior: "smooth" })
    }, 300) // close animation for mobile menu is 300
  }

  return (
    <header
      className={classNames(
        isScrolled ? "shadow-[0_0_10px_2px_rgba(0,0,0,0.3)]" : "",
        mobileMenuOpen ? "" : "",
        "sticky top-0 z-10 bg-broncos-navy"
      )}
    >
      <nav className="flex justify-between items-center h-20 px-6 md:px-8 mx-auto">
        <div>
          <a
            href="/my-portfolio/"
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
                isScrolled
                  ? "hover:text-broncos-orange"
                  : "hover:text-broncos-orange",
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
                        onClick={() => handleMobileScrollWithDelay(item.href)}
                        className="w-full flex flex-col items-center rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-slate-400 hover:bg-[#0D2D4E]"
                      >
                        <span className="text-broncos-orange">{item.id}.</span>
                        {item.name}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-center gap-4 pt-12">
                    {socials.map((item) => (
                      <a key={item.name} href={item.href} className="text-slate-400 hover:text-broncos-orange">
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-[25px]" aria-hidden="true" />
                      </a>
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
