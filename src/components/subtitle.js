import React from "react"

const Subtitle = props => {
  return (
    <div className="flex justify-center items-start flex-col w-full px-2 sm:px-6 mb-10">
      <div className="text-xl sm:text-2xl font-bold font-title mt-2 mb-2">
        Subtitle
      </div>
      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input
          id="subtitle"
          className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.data.subtitle}
          onChange={event => props.handleDataChange("subtitle", event)}
        />
      </div>
    </div>
  )
}

export default Subtitle
