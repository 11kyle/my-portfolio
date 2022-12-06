import { useState } from 'react';

import thumbnailProfile from './assets/thumbnail-kylejohnson.jpg';
import projectThumbnailEcomerceWebsite from './assets/thumbnail-ecomerce-website.png';
import projectThumbnailFilterList from './assets/thumbnail-filter-list.png';
import projectThumbnailRockPaperScissors from './assets/thumbnail-rock-paper-scissors.png';
import projectThumbnailSnapchatClone from './assets/thumbnail-snapchat-clone.png';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <header className="px-4 md:px-8 max-w-[1110px] mx-auto">
        <nav className="grid grid-cols-1 md:grid-cols-2">
          <h1 className="heading-sm md:heading-md primary-text-color text-center md:text-left mb-4">kylejohnson</h1>
          <div className="flex flex-row justify-center md:justify-end items-center gap-x-6">
            <a className="align-middle" href="https://github.com/11kyle">
              <svg className="fill-white hover:fill-spotlight-green" xmlns="http://www.w3.org/2000/svg" width="25" height="24"><path fillRule="evenodd" d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z"/></svg>
            </a>
            {/* <a href="#">
              <svg className="fill-white hover:fill-spotlight-green" xmlns="http://www.w3.org/2000/svg" width="26" height="23"><path d="M13.084.23a.751.751 0 0 0-.736.75v14.267a.75.75 0 1 0 1.5 0V.98a.75.75 0 0 0-.763-.75ZM24.44 4.504a.752.752 0 0 0-.284.064l-6.44 2.875a.752.752 0 0 0 0 1.37l6.44 2.884a.75.75 0 0 0 .612-1.369L19.861 8.13l4.907-2.191a.753.753 0 0 0 .38-.99.752.752 0 0 0-.708-.444ZM1.371 9.663a.752.752 0 0 0-.74.938C2.41 17.447 8.603 22.23 15.685 22.23a.75.75 0 1 0 0-1.501A14.053 14.053 0 0 1 2.083 10.225a.75.75 0 0 0-.712-.561v-.001Z"/></svg>
            </a> */}
            <a href="https://www.linkedin.com/in/kylejohnsondeveloper/">
              <svg className="fill-white hover:fill-spotlight-green" xmlns="http://www.w3.org/2000/svg" width="25" height="24"><path fillRule="evenodd" d="M5.551 3.304c-1.14 0-2.067.926-2.067 2.064 0 1.14.928 2.066 2.067 2.066a2.066 2.066 0 0 0 0-4.13ZM3.767 8.998v11.453h3.562L7.33 8.998H3.767Zm5.798 0V20.45l3.554.002.002-5.668c0-1.454.253-2.941 2.132-2.941 1.851 0 1.851 1.755 1.851 3.036v5.571l3.559-.001v-6.28c0-2.834-.517-5.457-4.27-5.457-1.763 0-2.916.997-3.368 1.85h-.05V8.997h-3.41ZM22.435 24H1.982c-.976 0-1.77-.777-1.77-1.732V1.731C.212.776 1.006 0 1.982 0h20.453c.98 0 1.777.776 1.777 1.73v20.538c0 .955-.797 1.732-1.777 1.732Z"/></svg>
            </a>
            {/* <a href="#">
              <svg className="fill-white hover:fill-spotlight-green" xmlns="http://www.w3.org/2000/svg" width="24" height="20"><path d="M23.492 2.705a9.563 9.563 0 0 1-2.742.751 4.788 4.788 0 0 0 2.1-2.643 9.536 9.536 0 0 1-3.033 1.159 4.778 4.778 0 0 0-8.14 4.357 13.564 13.564 0 0 1-9.844-4.99 4.774 4.774 0 0 0-.646 2.4 4.778 4.778 0 0 0 2.124 3.977 4.765 4.765 0 0 1-2.163-.598v.061a4.778 4.778 0 0 0 3.832 4.684 4.812 4.812 0 0 1-2.158.082 4.78 4.78 0 0 0 4.462 3.316 9.584 9.584 0 0 1-5.932 2.045c-.38 0-.762-.022-1.14-.067a13.508 13.508 0 0 0 7.32 2.146c8.787 0 13.59-7.277 13.59-13.589 0-.205-.004-.412-.013-.617a9.71 9.71 0 0 0 2.381-2.471l.002-.003Z"/></svg>
            </a> */}
          </div>
        </nav>
      </header>

      <main className="px-4 md:px-8 max-w-[1110px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 mb-[60px]">
          <img className="md:order-2 mx-auto mt-10" src={thumbnailProfile} alt="Picture of Adam Keyes." />
          <div className="md:order-1 text-center mt-10 md:mt-32">
            <h1 className="heading-lg md:heading-xl primary-text-color mb-6 md:mb-[60px]">Nice to meet you! I'm <span className="underline decoration-spotlight-green">Kyle Johnson</span>.</h1>
            <p className="paragraph secondary-text-color mb-6 md:mb-[34px]">Based in the United States, I'm a front-end developer passionate about building accessible web apps that users love.</p>
            <a className="paragraph link font-bold primary-text-color" href="#contact">Contact Me</a>
          </div>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 text-center md:text-left border-y-2 border-[#979797]">
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
        </div>
        <div>

        </div>
        <div className="my-20">
          <div className="flex flex-row justify-between items-center mb-10">
            <h1 className="heading-lg primary-text-color">Projects</h1>
            <a className="paragraph link font-bold primary-text-color" href="#contact">Contact Me</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 justify-items-center">


            <div className="relative mb-10 group">
              <img src={projectThumbnailEcomerceWebsite} alt="" />
              <h2 className="uppercase heading-sm primary-text-color mt-5">E-comerce Product Page</h2>
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
              <h2 className="uppercase heading-sm primary-text-color mt-5">Job Board</h2>
              <span className="uppercase secondary-text-color mr-[18px]">HTML</span>
              <span className="uppercase secondary-text-color mr-[18px]">CSS</span>
              <div className="lg:absolute lg:top-0 lg:left-0 lg:hidden lg:group-hover:flex flex flex-row lg:flex-col lg:justify-center lg:items-center gap-x-[30px] lg:gap-y-[30px] lg:bg-black lg:bg-opacity-80 mt-5 lg:mt-0 lg:w-full lg:h-[calc(100%-76px)]">
                <a className="paragraph link font-bold primary-text-color" href="https://11kyle.github.io/job-listings-filter/" target="_blank">View Project</a>
                <a className="paragraph link font-bold primary-text-color" href="https://github.com/11kyle/job-listings-filter" target="_blank">View Code</a>
              </div>
            </div>
            <div className="relative mb-10 group">
              <img src={projectThumbnailRockPaperScissors} alt="" />
              <h2 className="uppercase heading-sm primary-text-color mt-5">Rock, Paper, Scissors</h2>
              <span className="uppercase secondary-text-color mr-[18px]">HTML</span>
              <span className="uppercase secondary-text-color mr-[18px]">CSS</span>
              <div className="lg:absolute lg:top-0 lg:left-0 lg:hidden lg:group-hover:flex flex flex-row lg:flex-col lg:justify-center lg:items-center gap-x-[30px] lg:gap-y-[30px] lg:bg-black lg:bg-opacity-80 mt-5 lg:mt-0 lg:w-full lg:h-[calc(100%-76px)]">
                <a className="paragraph link font-bold primary-text-color" href="https://11kyle.github.io/rock-paper-scissors/" target="_blank">View Project</a>
                <a className="paragraph link font-bold primary-text-color" href="https://github.com/11kyle/rock-paper-scissors" target="_blank">View Code</a>
              </div>
            </div>
            <div className="relative mb-10 group">
              <img src={projectThumbnailSnapchatClone} alt="" />
              <h2 className="uppercase heading-sm primary-text-color mt-5">Snapchat Menu Clone</h2>
              <span className="uppercase secondary-text-color mr-[18px]">HTML</span>
              <span className="uppercase secondary-text-color mr-[18px]">CSS</span>
              <div className="lg:absolute lg:top-0 lg:left-0 lg:hidden lg:group-hover:flex flex flex-row lg:flex-col lg:justify-center lg:items-center gap-x-[30px] lg:gap-y-[30px] lg:bg-black lg:bg-opacity-80 mt-5 lg:mt-0 lg:w-full lg:h-[calc(100%-76px)]">
                <a className="paragraph link font-bold primary-text-color" href="https://11kyle.github.io/snapchat-clone/" target="_blank">View Project</a>
                <a className="paragraph link font-bold primary-text-color" href="https://github.com/11kyle/snapchat-clone" target="_blank">View Code</a>
              </div>
            </div>
            {/* <div className="relative mb-10 group">
              <img src={project4ThumbnailSmall} alt="" />
              <h2 className="uppercase heading-sm primary-text-color mt-5">Entertainment Web App</h2>
              <span className="uppercase secondary-text-color mr-[18px]">HTML</span>
              <span className="uppercase secondary-text-color mr-[18px]">CSS</span>
              <div className="lg:absolute lg:top-0 lg:left-0 lg:hidden lg:group-hover:flex flex flex-row lg:flex-col lg:justify-center lg:items-center gap-x-[30px] lg:gap-y-[30px] lg:bg-black lg:bg-opacity-80 mt-5 lg:mt-0 lg:w-full lg:h-[calc(100%_-_76px)]">
                <a className="paragraph link font-bold primary-text-color" href="#" target="_blank">View Project</a>
                <a className="paragraph link font-bold primary-text-color" href="#" target="_blank">View Code</a>
              </div>
            </div>
            <div className="relative mb-10 group">
              <img src={project5ThumbnailSmall} alt="" />
              <h2 className="uppercase heading-sm primary-text-color mt-5">Memory Game</h2>
              <span className="uppercase secondary-text-color mr-[18px]">HTML</span>
              <span className="uppercase secondary-text-color mr-[18px]">CSS</span>
              <div className="lg:absolute lg:top-0 lg:left-0 lg:hidden lg:group-hover:flex flex flex-row lg:flex-col lg:justify-center lg:items-center gap-x-[30px] lg:gap-y-[30px] lg:bg-black lg:bg-opacity-80 mt-5 lg:mt-0 lg:w-full lg:h-[calc(100%_-_76px)]">
                <a className="paragraph link font-bold primary-text-color" href="#" target="_blank">View Project</a>
                <a className="paragraph link font-bold primary-text-color" href="#" target="_blank">View Code</a>
              </div>
            </div>
            <div className="relative mb-10 group">
              <img src={project6ThumbnailSmall} alt="" />
              <h2 className="uppercase heading-sm primary-text-color mt-5">Art Gallery Showcase</h2>
              <span className="uppercase secondary-text-color mr-[18px]">HTML</span>
              <span className="uppercase secondary-text-color mr-[18px]">CSS</span>
              <div className="lg:absolute lg:top-0 lg:left-0 lg:hidden lg:group-hover:flex flex flex-row lg:flex-col lg:justify-center lg:items-center gap-x-[30px] lg:gap-y-[30px] lg:bg-black lg:bg-opacity-80 mt-5 lg:mt-0 lg:w-full lg:h-[calc(100%_-_76px)]">
                <a className="paragraph link font-bold primary-text-color" href="#" target="_blank">View Project</a>
                <a className="paragraph link font-bold primary-text-color" href="#" target="_blank">View Code</a>
              </div>
            </div> */}
          </div>
        </div>
      </main>

      <footer className="relative bg-dark-grey">
        <div className="absolute -top-[65px] -left-[368px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="530" height="129"><g fill="none" fillRule="evenodd" stroke="#FFF" opacity=".25"><ellipse cx="265" cy="40" rx="264.5" ry="39.5"/><ellipse cx="265" cy="52" rx="264.5" ry="39.5"/><ellipse cx="265" cy="65" rx="264.5" ry="39.5"/><ellipse cx="265" cy="77" rx="264.5" ry="39.5"/><ellipse cx="265" cy="89" rx="264.5" ry="39.5"/></g></svg>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[220px] pt-[60px] px-4 md:px-8 max-w-[1110px] mx-auto">
          <div className="text-center lg:text-left mb-[50px]">
            <h1 className="heading-lg primary-text-color mb-5">Contact</h1>
            <p className="paragraph secondary-text-color">I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.</p>
          </div>
          <form id="contact" className="flex flex-col mb-20">
            <label className="uppercase text-[#979797]">Name</label>
            <input className="bg-dark-grey text-white border-b border-[#979797] focus:border-spotlight-green mb-8 focus:outline-none" type="text" />
            <label className="uppercase text-[#979797]">Email</label>
            <input className="bg-dark-grey text-white border-b border-[#979797] focus:border-spotlight-green mb-8 focus:outline-none" type="email" />
            <label className="uppercase text-[#979797]">Message</label>
            <textarea className="bg-dark-grey text-white border-b border-[#979797] focus:border-spotlight-green mb-8 focus:outline-none resize-none" rows="3"></textarea>
            <button className="paragraph link font-bold primary-text-color text-right" type="submit">Send Message</button>
          </form>
          <nav className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 border-t-2 border-[#979797] py-10">
            <h1 className="heading-sm primary-text-color text-center md:text-left mb-4">kylejohnson</h1>
            <div className="flex flex-row justify-center md:justify-end items-center gap-x-6">
              <a className="align-middle" href="https://github.com/11kyle">
                <svg className="fill-white hover:fill-spotlight-green" xmlns="http://www.w3.org/2000/svg" width="25" height="24"><path fillRule="evenodd" d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z"/></svg>
              </a>
              {/* <a href="#">
                <svg className="fill-white hover:fill-spotlight-green" xmlns="http://www.w3.org/2000/svg" width="26" height="23"><path d="M13.084.23a.751.751 0 0 0-.736.75v14.267a.75.75 0 1 0 1.5 0V.98a.75.75 0 0 0-.763-.75ZM24.44 4.504a.752.752 0 0 0-.284.064l-6.44 2.875a.752.752 0 0 0 0 1.37l6.44 2.884a.75.75 0 0 0 .612-1.369L19.861 8.13l4.907-2.191a.753.753 0 0 0 .38-.99.752.752 0 0 0-.708-.444ZM1.371 9.663a.752.752 0 0 0-.74.938C2.41 17.447 8.603 22.23 15.685 22.23a.75.75 0 1 0 0-1.501A14.053 14.053 0 0 1 2.083 10.225a.75.75 0 0 0-.712-.561v-.001Z"/></svg>
              </a> */}
              <a href="https://www.linkedin.com/in/kylejohnsondeveloper/">
                <svg className="fill-white hover:fill-spotlight-green" xmlns="http://www.w3.org/2000/svg" width="25" height="24"><path fillRule="evenodd" d="M5.551 3.304c-1.14 0-2.067.926-2.067 2.064 0 1.14.928 2.066 2.067 2.066a2.066 2.066 0 0 0 0-4.13ZM3.767 8.998v11.453h3.562L7.33 8.998H3.767Zm5.798 0V20.45l3.554.002.002-5.668c0-1.454.253-2.941 2.132-2.941 1.851 0 1.851 1.755 1.851 3.036v5.571l3.559-.001v-6.28c0-2.834-.517-5.457-4.27-5.457-1.763 0-2.916.997-3.368 1.85h-.05V8.997h-3.41ZM22.435 24H1.982c-.976 0-1.77-.777-1.77-1.732V1.731C.212.776 1.006 0 1.982 0h20.453c.98 0 1.777.776 1.777 1.73v20.538c0 .955-.797 1.732-1.777 1.732Z"/></svg>
              </a>
              {/* <a href="#">
                <svg className="fill-white hover:fill-spotlight-green" xmlns="http://www.w3.org/2000/svg" width="24" height="20"><path d="M23.492 2.705a9.563 9.563 0 0 1-2.742.751 4.788 4.788 0 0 0 2.1-2.643 9.536 9.536 0 0 1-3.033 1.159 4.778 4.778 0 0 0-8.14 4.357 13.564 13.564 0 0 1-9.844-4.99 4.774 4.774 0 0 0-.646 2.4 4.778 4.778 0 0 0 2.124 3.977 4.765 4.765 0 0 1-2.163-.598v.061a4.778 4.778 0 0 0 3.832 4.684 4.812 4.812 0 0 1-2.158.082 4.78 4.78 0 0 0 4.462 3.316 9.584 9.584 0 0 1-5.932 2.045c-.38 0-.762-.022-1.14-.067a13.508 13.508 0 0 0 7.32 2.146c8.787 0 13.59-7.277 13.59-13.589 0-.205-.004-.412-.013-.617a9.71 9.71 0 0 0 2.381-2.471l.002-.003Z"/></svg>
              </a> */}
            </div>
          </nav>
        </div>
        
      </footer>
    </div>
  )
}

export default App
