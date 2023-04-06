export default function Example() {

  const handleScroll = () => {
    const element = document.getElementById("about")
  
    element.scrollIntoView({behavior: 'smooth'} )
  }

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
            <button 
              onClick={handleScroll} 
              className="text-sm text-primary-black
              relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-primary-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">
              Learn more <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
