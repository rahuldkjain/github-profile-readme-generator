import React from "react"

const Support = props => {
  return (
    <div className="px-2 sm:px-6 mb-4">
      <div className="text-xl sm:text-2xl font-bold font-title mt-2 mb-2">
        Support
      </div>
      <div className="flex flex-wrap justify-start items-center">
        <div className="w-2/5 flex justify-between items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            className="w-36 h-8 sm:w-52 sm:h-12"
            alt="buymeacoffee"
          />
          <input
            id="buy-me-a-coffee"
            placeholder="buymeacoffee username"
            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-1 sm:px-2 ml-2 sm:ml-0 focus:border-blue-700"
            value={props.support.buyMeACoffee || ""}
            onChange={event => props.handleSupportChange("buyMeACoffee", event)}
          />
        </div>
      </div>
    </div>
  )
}

export default Support
