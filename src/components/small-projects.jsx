import SectionHeading from "./section-heading";

export default function SmallProjects() {
  return (
    <div className="">
      <div className="py-10">
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <SectionHeading 
            title="Components"
          />

          <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
            <div>
              <div className="w-full overflow-hidden rounded-lg">
                <img
                  src="/nft-preview-tablet.png"
                  alt="Drawstring top with elastic loop closure and textured interior padding."
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            
            <div>
              <div className="w-full overflow-hidden rounded-lg">
                <img
                  src="/qr-code-tablet.png"
                  alt="Front zipper pouch with included key ring."
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div>
              <div className="w-full overflow-hidden rounded-lg">
                <img
                  src="/interactive-rating-tablet.png"
                  alt="Front zipper pouch with included key ring."
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div>
              <div className="w-full overflow-hidden rounded-lg">
                <img
                  src="/interactive-pricing-tablet.png"
                  alt="Front zipper pouch with included key ring."
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
