import About from './components/about';
import Hero from './components/hero';
import Layout from './components/layout';
import Navbar from './components/navbar';
import Projects from './components/projects';
import SmallProjects from './components/small-projects';
import Technologies from './components/technologies';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Layout>
        
        <About />
        {/* <div className="relative grid grid-cols-1 md:grid-cols-2 text-center md:text-left border-y-2 border-[#979797]">
          <div>
            <h1 className="heading-lg primary-text-color mt-10">HTML</h1>
            <p className="paragraph secondary-text-color">5+ Years Experience</p>
          </div>
          <div>
            <h1 className="heading-lg primary-text-color mt-6">CSS</h1>
            <p className="paragraph secondary-text-color">5+ Years Experience</p>
          </div>
          <div>
            <h1 className="heading-lg primary-text-color mt-6">Javascript</h1>
            <p className="paragraph secondary-text-color">5+ Years Experience</p>
          </div>
          <div>
            <h1 className="heading-lg primary-text-color mt-6">Accessibility</h1>
            <p className="paragraph secondary-text-color">5+ Years Experience</p>
          </div>
          <div>
            <h1 className="heading-lg primary-text-color mt-6">React</h1>
            <p className="paragraph secondary-text-color">5+ Years Experience</p>
          </div>
          <div>
            <h1 className="heading-lg primary-text-color mt-6">Tailwind CSS</h1>
            <p className="paragraph secondary-text-color mb-10">3 Years Experience</p>
          </div>
        </div> */}
        
        {/* <section id="projects" className="my-20">
          <div className="flex justify-between items-center mb-10">
            <h2 className="heading-lg primary-text-color">Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 justify-items-center">
            <div className="relative mb-10 group">
              <img src={projectThumbnailEcomerceWebsite} alt="" />
              <h3 className="uppercase heading-sm primary-text-color mt-5">E-comerce Product Page</h3>
              <span className="uppercase secondary-text-color mr-[18px]">React</span>
              <span className="uppercase secondary-text-color mr-[18px]">HTML</span>
              <span className="uppercase secondary-text-color mr-[18px]">CSS</span>
              <div className="lg:absolute lg:top-0 lg:left-0 lg:hidden lg:group-hover:flex flex flex-row lg:flex-col lg:justify-center lg:items-center gap-x-[30px] lg:gap-y-[30px] lg:bg-black lg:bg-opacity-80 mt-5 lg:mt-0 lg:w-full lg:h-[calc(100%-76px)]">
                <a className="paragraph link font-bold primary-text-color" href="https://11kyle.github.io/ecommerce-product-page/" target="_blank">View Project</a>
                <a className="paragraph link font-bold primary-text-color" href="https://github.com/11kyle/ecommerce-product-page" target="_blank">View Code</a>
              </div>
            </div>

            <div className="relative mb-10 group">
              <img src={projectThumbnailFilterList} alt="" />
              <h3 className="uppercase heading-sm primary-text-color mt-5">Job Board</h3>
              <span className="uppercase secondary-text-color mr-[18px]">HTML</span>
              <span className="uppercase secondary-text-color mr-[18px]">CSS</span>
              <div className="lg:absolute lg:top-0 lg:left-0 lg:hidden lg:group-hover:flex flex flex-row lg:flex-col lg:justify-center lg:items-center gap-x-[30px] lg:gap-y-[30px] lg:bg-black lg:bg-opacity-80 mt-5 lg:mt-0 lg:w-full lg:h-[calc(100%-76px)]">
                <a className="paragraph link font-bold primary-text-color" href="https://11kyle.github.io/job-listings-filter/" target="_blank">View Project</a>
                <a className="paragraph link font-bold primary-text-color" href="https://github.com/11kyle/job-listings-filter" target="_blank">View Code</a>
              </div>
            </div>
          </div>
        </section> */}
        <Projects />
        <SmallProjects />
        <Technologies />
      </Layout>
    </>
  )
}

export default App
