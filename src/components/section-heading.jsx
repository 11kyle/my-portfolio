export default function SectionHeading({ title }) {
  return (
    <div className="pb-10">
      <h3 className="font-exo-2 text-2xl sm:text-4xl font-bold leading-6 text-primary-orange uppercase">
        {title}
      </h3>
    </div>
  )
}