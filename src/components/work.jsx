import React from 'react';
import PropTypes from 'prop-types';

const Work = (props) => {
  const { prefix, handlePrefixChange, data, handleDataChange, link, handleLinkChange } = props;
  return (
    <div className="flex justify-center items-start flex-col w-full px-2 sm:px-6 mb-10">
      <div className="text-xl sm:text-2xl font-bold font-title mt-2 mb-2">Work</div>
      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input id="currentWork-prefix" placeholder="Hi, I'm " className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700" value={prefix.currentWork} onChange={(event) => handlePrefixChange('currentWork', event)} />
        <input id="currentWork" placeholder="project name" className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/4 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700" value={data.currentWork} onChange={(event) => handleDataChange('currentWork', event)} />
        <input id="currentWork-link" placeholder="project link" className="outline-none placeholder-gray-700 mr-8 sm:mr-0 text-blue-700 w-full sm:w-1/4 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700" value={link.currentWork} onChange={(event) => handleLinkChange('currentWork', event)} />
      </div>
      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input id="collaborateOn-prefix" className="outline-none mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700" value={prefix.collaborateOn} onChange={(event) => handlePrefixChange('collaborateOn', event)} />
        <input id="collaborateOn" placeholder="project name" className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/4 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700" value={data.collaborateOn} onChange={(event) => handleDataChange('collaborateOn', event)} />
        <input id="collaborateOn-link" placeholder="project link" className="outline-none placeholder-gray-700 mr-8 sm:mr-0 text-blue-700 w-full sm:w-1/4  border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700" value={link.collaborateOn} onChange={(event) => handleLinkChange('collaborateOn', event)} />
      </div>
      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input id="helpWith-prefix" className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700" value={prefix.helpWith} onChange={(event) => handlePrefixChange('helpWith', event)} />
        <input id="helpWith" placeholder="project name" className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/4 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700" value={data.helpWith} onChange={(event) => handleDataChange('helpWith', event)} />
        <input id="helpWith-link" placeholder="project link" className="outline-none placeholder-gray-700 mr-8 sm:mr-0 text-blue-700 w-full sm:w-1/4  border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700" value={link.helpWith} onChange={(event) => handleLinkChange('helpWith', event)} />
      </div>

      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input id="currentLearn-prefix" className="outline-none mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700" value={prefix.currentLearn} onChange={(event) => handlePrefixChange('currentLearn', event)} />
        <input id="currentLearn" placeholder="Frameworks, courses etc." className="outline-none placeholder-gray-700 w-full sm:w-1/3  border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700" value={data.currentLearn} onChange={(event) => handleDataChange('currentLearn', event)} />
      </div>
      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input id="ama-prefix" className="outline-none mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700" value={prefix.ama} onChange={(event) => handlePrefixChange('ama', event)} />
        <input id="ama" placeholder="react, vue and gsap" className="outline-none placeholder-gray-700 mr-8 sm:mr-0 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700" value={data.ama} onChange={(event) => handleDataChange('ama', event)} />
      </div>

      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input id="contact-prefix" className="outline-none mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700" value={prefix.contact} onChange={(event) => handlePrefixChange('contact', event)} />
        <input id="contact" placeholder="example@gmail.com" className="outline-none placeholder-gray-700 mr-8 sm:mr-0 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700" value={data.contact} onChange={(event) => handleDataChange('contact', event)} />
      </div>

      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input id="portfolio-prefix" className="outline-none mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700" value={prefix.portfolio} onChange={(event) => handlePrefixChange('portfolio', event)} />
        <input id="portfolio" placeholder="portfolio link" className="outline-none placeholder-gray-700 mr-8 sm:mr-0 text-blue-700 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700" value={link.portfolio} onChange={(event) => handleLinkChange('portfolio', event)} />
      </div>
      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input id="blog-prefix" className="outline-none mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700" value={prefix.blog} onChange={(event) => handlePrefixChange('blog', event)} />
        <input id="blog" placeholder="blog link" className="outline-none placeholder-gray-700 mr-8 sm:mr-0 text-blue-700 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700" value={link.blog} onChange={(event) => handleLinkChange('blog', event)} />
      </div>
      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input id="resume-prefix" className="outline-none mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700" value={prefix.resume} onChange={(event) => handlePrefixChange('resume', event)} />
        <input id="resume" placeholder="resume link" className="outline-none placeholder-gray-700 mr-8 sm:mr-0 text-blue-700 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700" value={link.resume} onChange={(event) => handleLinkChange('resume', event)} />
      </div>

      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input id="funFact-prefix" className="outline-none mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700" value={prefix.funFact} onChange={(event) => handlePrefixChange('funFact', event)} />
        <input id="funFact" placeholder="I think I am funny" className="outline-none placeholder-gray-700 mr-8 sm:mr-0 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700" value={data.funFact} onChange={(event) => handleDataChange('funFact', event)} />
      </div>
    </div>
  );
};

export default Work;
Work.propTypes = {
  prefix: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  link: PropTypes.object.isRequired,
  handlePrefixChange: PropTypes.func.isRequired,
  handleDataChange: PropTypes.func.isRequired,
  handleLinkChange: PropTypes.func.isRequired,
};
