import About from './components/about';
import Layout from './components/layout';
import Projects from './components/projects';
import SmallProjects from './components/small-projects';
import Technologies from './components/technologies';

function App() {
  return (
    <>
      <Layout>
        <About />
        {/* 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 justify-items-center">
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
