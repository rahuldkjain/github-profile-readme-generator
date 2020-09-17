import React from "react"

const Subtitle = props => {
  return (
    <div className="flex justify-center items-start flex-col w-full px-2 sm:px-6 mb-10">
      <div className="text-xl sm:text-2xl font-bold font-title mt-2 mb-2">
        Subtitle
      </div>
      <input
        id="subtitle"
        className="outline-none w-full text-xs sm:text-lg sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
        value={props.data.subtitle}
        onChange={event => props.handleDataChange("subtitle", event)}
      />
    </div>
  )
}

export default Subtitle
