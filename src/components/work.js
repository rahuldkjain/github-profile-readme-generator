import React from "react"

const Work = props => {
  return (
    <div className="flex justify-center items-start flex-col w-full px-2 sm:px-6 mb-10">
      <div className="text-xl sm:text-2xl font-bold font-title mt-2 mb-2">
        Work
      </div>
      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input
          id="currentWork-prefix"
          placeholder="Hi, I'm "
          className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.prefix.currentWork}
          onChange={event => props.handlePrefixChange("currentWork", event)}
        />
        <input
          id="currentWork"
          placeholder="project name"
          className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/4 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.data.currentWork}
          onChange={event => props.handleDataChange("currentWork", event)}
        />
        <input
          id="currentWork-link"
          placeholder="project link"
          className="outline-none placeholder-gray-700 mr-8 sm:mr-0 text-blue-700 w-full sm:w-1/4 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.link.currentWork}
          onChange={event => props.handleLinkChange("currentWork", event)}
        />
      </div>
      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input
          id="collaborateOn-prefix"
          className="outline-none mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.prefix.collaborateOn}
          onChange={event => props.handlePrefixChange("collaborateOn", event)}
        />
        <input
          id="collaborateOn"
          placeholder="project name"
          className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/4 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.data.collaborateOn}
          onChange={event => props.handleDataChange("collaborateOn", event)}
        />
        <input
          id="collaborateOn-link"
          placeholder="project link"
          className="outline-none placeholder-gray-700 mr-8 sm:mr-0 text-blue-700 w-full sm:w-1/4  border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.link.collaborateOn}
          onChange={event => props.handleLinkChange("collaborateOn", event)}
        />
      </div>
      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input
          id="helpWith-prefix"
          className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.prefix.helpWith}
          onChange={event => props.handlePrefixChange("helpWith", event)}
        />
        <input
          id="helpWith"
          placeholder="project name"
          className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/4 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.data.helpWith}
          onChange={event => props.handleDataChange("helpWith", event)}
        />
        <input
          id="helpWith-link"
          placeholder="project link"
          className="outline-none placeholder-gray-700 mr-8 sm:mr-0 text-blue-700 w-full sm:w-1/4  border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.link.helpWith}
          onChange={event => props.handleLinkChange("helpWith", event)}
        />
      </div>

      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input
          id="currentLearn-prefix"
          className="outline-none mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.prefix.currentLearn}
          onChange={event => props.handlePrefixChange("currentLearn", event)}
        />
        <input
          id="currentLearn"
          placeholder="Frameworks, courses etc."
          className="outline-none placeholder-gray-700 w-full sm:w-1/3  border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.data.currentLearn}
          onChange={event => props.handleDataChange("currentLearn", event)}
        />
      </div>
      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input
          id="ama-prefix"
          className="outline-none mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.prefix.ama}
          onChange={event => props.handlePrefixChange("ama", event)}
        />
        <input
          id="ama"
          placeholder="react, vue and gsap"
          className="outline-none placeholder-gray-700 mr-8 sm:mr-0 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.data.ama}
          onChange={event => props.handleDataChange("ama", event)}
        />
      </div>

      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input
          id="contact-prefix"
          className="outline-none mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.prefix.contact}
          onChange={event => props.handlePrefixChange("contact", event)}
        />
        <input
          id="contact"
          placeholder="example@gmail.com"
          className="outline-none placeholder-gray-700 mr-8 sm:mr-0 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.data.contact}
          onChange={event => props.handleDataChange("contact", event)}
        />
      </div>

      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input
          id="portfolio-prefix"
          className="outline-none mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.prefix.portfolio}
          onChange={event => props.handlePrefixChange("portfolio", event)}
        />
        <input
          id="portfolio"
          placeholder="portfolio link"
          className="outline-none placeholder-gray-700 mr-8 sm:mr-0 text-blue-700 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.link.portfolio}
          onChange={event => props.handleLinkChange("portfolio", event)}
        />
      </div>
      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input
          id="blog-prefix"
          className="outline-none mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.prefix.blog}
          onChange={event => props.handlePrefixChange("blog", event)}
        />
        <input
          id="blog"
          placeholder="blog link"
          className="outline-none placeholder-gray-700 mr-8 sm:mr-0 text-blue-700 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.link.blog}
          onChange={event => props.handleLinkChange("blog", event)}
        />
      </div>
      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input
          id="resume-prefix"
          className="outline-none mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.prefix.resume}
          onChange={event => props.handlePrefixChange("resume", event)}
        />
        <input
          id="resume"
          placeholder="resume link"
          className="outline-none placeholder-gray-700 mr-8 sm:mr-0 text-blue-700 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.link.resume}
          onChange={event => props.handleLinkChange("resume", event)}
        />
      </div>
      
      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input
          id="funFact-prefix"
          className="outline-none mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.prefix.funFact}
          onChange={event => props.handlePrefixChange("funFact", event)}
        />
        <input
          id="funFact"
          placeholder="I think I am funny"
          className="outline-none placeholder-gray-700 mr-8 sm:mr-0 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={props.data.funFact}
          onChange={event => props.handleDataChange("funFact", event)}
        />
      </div>
    </div>
  )
}

export default Work
