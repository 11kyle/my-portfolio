export default function RightOverlay() {
  return (
    <div className="hidden md:block fixed right-4 lg:right-8 bottom-0">
      <div className="flex flex-col items-center space-y-6">
          <a href="mailto:11kyle.johnson@gmail.com" className="text-slate-400 text-sm" style={{ writingMode: "vertical-lr"}}>11kyle.johnson@gmail.com</a>
          <div className="h-20 w-[1px] bg-slate-400"></div>
        </div>
    </div>
  )
}