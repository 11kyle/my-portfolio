import SectionHeading from "./section-heading";
import { useElementOnScreen } from "../hooks/useElementOnScreen"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SmallProjects() {
  const [containerRef, isVisible] = useElementOnScreen({
    rootMargin: "-100px 0px",
    threshold: 0.0
  })

  return (
    <div 
      id="components" 
      ref={containerRef} 
      className={classNames(
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3/4",
        "transition duration-700 py-10"
      )}
    >
      {/* Details section */}
      <section aria-labelledby="details-heading">
        <SectionHeading 
          title="Components"
        />
        <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
          <div>
            <div className="w-full overflow-hidden rounded-lg">
              <img
                src="nft-preview-tablet.png"
                alt="Drawstring top with elastic loop closure and textured interior padding."
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          
          <div>
            <div className="w-full overflow-hidden rounded-lg">
              <img
                src="qr-code-tablet.png"
                alt="Front zipper pouch with included key ring."
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div>
            <div className="w-full overflow-hidden rounded-lg">
              <img
                src="interactive-rating-tablet.png"
                alt="Front zipper pouch with included key ring."
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div>
            <div className="w-full overflow-hidden rounded-lg">
              <img
                src="interactive-pricing-tablet.png"
                alt="Front zipper pouch with included key ring."
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}