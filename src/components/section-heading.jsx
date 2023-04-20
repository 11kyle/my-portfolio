export default function SectionHeading({ title, id }) {
  return (
    <div className="flex items-center pb-10">
      <h3 className="font-exo-2 text-2xl sm:text-3xl font-bold text-slate-200">
        <span className="text-primary-orange font-normal font-roboto-mono">{id}. </span>
        {title}
      </h3>
      <span className="inline-flex grow md:grow-0 md:w-40 lg:w-60 h-px bg-slate-400 ml-4"></span>
    </div>
  )
}