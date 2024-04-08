import { FcScatterPlot } from "react-icons/fc";

const Logo = () => {
  return (
    <a href="/">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 flex-shrink-0">
          <FcScatterPlot className="w-full h-full" />
        </div>
        <div className="">
          <h1 className="text-blue-500 font-semibold uppercase text-sm">Unit Testing</h1>
        </div>
      </div>
    </a>

  )
}

export default Logo