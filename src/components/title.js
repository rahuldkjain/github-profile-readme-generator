import React from "react"

const Title = props => {
  return (
    <div className="flex justify-center items-start flex-col w-full px-2 sm:px-6 mb-10">
      <div className="text-xl sm:text-2xl font-bold font-title mt-2 mb-2">
        Title
      </div>
      <div className="flex justify-start items-center w-full text-regular text-xs sm:text-lg">
        <input
          id="title-prefix"
          className="outline-none w-24 sm:w-40 mr-10 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700 prefix"
          value={props.prefix.title}
          onChange={event => props.handlePrefixChange("title", event)}
        />
        <input
          id="title-name"
          placeholder="name"
          className="outline-none placeholder-gray-700 w-1/2 sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.data.title}
          onChange={event => props.handleDataChange("title", event)}
        />
      </div>
    </div>
  )
}

export default Title
