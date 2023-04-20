import SectionHeading from "./section-heading"
import { useElementOnScreen } from "../hooks/useElementOnScreen"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function About() {
  const [containerRef, isVisible] = useElementOnScreen({
    rootMargin: "0px 0px -200px 0px",
    threshold: 0.0
  })

  return (
    <div id="about" className="scroll-m-20 mb-20 md:mb-40">
      <section 
        ref={containerRef} 
        className={classNames(
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          "trainsition duration-700 pt-20"
        )}
      >
        <SectionHeading 
          title="About me"
          id="01" 
        />
        <div className="space-y-4 text-sm lg:text-base">
          <p className="text-slate-400">Hi there! My name is Kyle Johnson and I am a frontend web developer. I have a passion for creating visually stunning and intuitive user interfaces that not only look great but also provide seamless user experiences. I believe that a great user interface is key to any successful website or web application.</p>
          <p className="text-slate-400">When I'm not coding, you can usually find me indulging in one of my hobbies. I'm a competitive person by nature and love a good challenge, whether that be on the golf course, at the climbing gym or in a video game. I also enjoy puzzles and problem-solving, which is why frontend development is such a perfect fit for me.</p>
          <p className="text-slate-400">Speaking of development, I have a wide range of skills that I bring to the table. I'm proficient in HTML5 and CSS3, as well as in modern frontend frameworks like React and Vue. I also have experience with MongoDB, Tailwind CSS, and many other tools and technologies. My goal is always to use the right tool for the job, ensuring that each project is optimized for performance, usability, and scalability.</p>
          <p className="text-slate-400">I'm always looking for new challenges and opportunities to grow as a developer. If you're interested in working together or just want to chat about web development and user interfaces, feel free to reach out. I'm excited to see what we can create together!</p>
        </div>
      </section>
    </div>
  )
}