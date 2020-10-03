import React from "react"
import {devEnvironmentArr} from "../constants/devenvironment";

const Devenvironment = props => {
  
  const CreateDevEnv = ({title,image}) => {
    return (
      <div className="w-1/3 sm:w-1/4 my-6" key={title}>
        <label
          htmlFor={title}
          className="skillCheckboxLabel cursor-pointer flex items-center justify-start"
        >
          <input
            id={title}
            type="checkbox"
            checked={props.devenvarr[title]}
            onChange={(e) => props.handleDevEnvChange(title)}
          />
          <img
            className="ml-4 w-8 h-8 sm:w-10 sm:h-10"
            src={image}
            alt={title}
          />
          <span className="tooltiptext">{title}</span>
        </label>
      </div>
    )
  }

  return (
    <div className="px-2 sm:px-6 mb-10">
      <div className="text-xl sm:text-2xl font-bold font-title mt-2 mb-2">
        Dev environment
      </div>

      <div className="flex justify-start items-center flex-wrap w-full mb-6 pl-4 sm:pl-10">
        {devEnvironmentArr.map(key => CreateDevEnv(key))}
      </div>
    </div>
  )
}

export default Devenvironment
