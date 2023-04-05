export default function Badge({ title }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800">
      {title}
    </span>
  )
}
