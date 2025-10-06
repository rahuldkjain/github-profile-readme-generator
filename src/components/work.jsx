import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Work = (props) => {
  const { prefix, handlePrefixChange, data, handleDataChange, link, handleLinkChange } = props;
  const { t } = useTranslation();
  
  return (
    <div className="flex justify-center items-start flex-col w-full px-2 sm:px-6 mb-10">
      <div className="text-xl sm:text-2xl font-bold font-title mt-2 mb-2">{t('sections.work')}</div>
      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input
          id="currentWork-prefix"
          placeholder={t('work.currentWorkPlaceholder')}
          className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={prefix.currentWork}
          onChange={(event) => handlePrefixChange('currentWork', event)}
        />
        <input
          id="currentWork"
          placeholder={t('fields.projectName')}
          className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/4 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={data.currentWork}
          onChange={(event) => handleDataChange('currentWork', event)}
        />
        <input
          id="currentWork-link"
          placeholder={t('fields.projectLink')}
          className="outline-none placeholder-gray-700 mr-8 sm:mr-0 text-blue-700 w-full sm:w-1/4 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={link.currentWork}
          onChange={(event) => handleLinkChange('currentWork', event)}
        />
      </div>
      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input
          id="collaborateOn-prefix"
          placeholder={t('work.collaborateOnPrefix')}
          className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={prefix.collaborateOn}
          onChange={(event) => handlePrefixChange('collaborateOn', event)}
        />
        <input
          id="collaborateOn"
          placeholder={t('fields.projectName')}
          className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/4 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={data.collaborateOn}
          onChange={(event) => handleDataChange('collaborateOn', event)}
        />
        <input
          id="collaborateOn-link"
          placeholder={t('fields.projectLink')}
          className="outline-none placeholder-gray-700 mr-8 sm:mr-0 text-blue-700 w-full sm:w-1/4  border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={link.collaborateOn}
          onChange={(event) => handleLinkChange('collaborateOn', event)}
        />
      </div>
      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input
          id="helpWith-prefix"
          placeholder={t('work.helpWithPrefix')}
          className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={prefix.helpWith}
          onChange={(event) => handlePrefixChange('helpWith', event)}
        />
        <input
          id="helpWith"
          placeholder={t('fields.projectName')}
          className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/4 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={data.helpWith}
          onChange={(event) => handleDataChange('helpWith', event)}
        />
        <input
          id="helpWith-link"
          placeholder={t('fields.projectLink')}
          className="outline-none placeholder-gray-700 mr-8 sm:mr-0 text-blue-700 w-full sm:w-1/4  border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={link.helpWith}
          onChange={(event) => handleLinkChange('helpWith', event)}
        />
      </div>

      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input
          id="currentLearn-prefix"
          placeholder={t('work.currentLearnPrefix')}
          className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={prefix.currentLearn}
          onChange={(event) => handlePrefixChange('currentLearn', event)}
        />
        <input
          id="currentLearn"
          placeholder={t('work.learningPlaceholder')}
          className="outline-none placeholder-gray-700 w-full sm:w-1/3  border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={data.currentLearn}
          onChange={(event) => handleDataChange('currentLearn', event)}
        />
      </div>
      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input
          id="ama-prefix"
          placeholder={t('work.amaPrefix')}
          className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={prefix.ama}
          onChange={(event) => handlePrefixChange('ama', event)}
        />
        <input
          id="ama"
          placeholder={t('work.askAboutPlaceholder')}
          className="outline-none placeholder-gray-700 mr-8 sm:mr-0 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={data.ama}
          onChange={(event) => handleDataChange('ama', event)}
        />
      </div>

      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input
          id="contact-prefix"
          placeholder={t('work.contactPrefix')}
          className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={prefix.contact}
          onChange={(event) => handlePrefixChange('contact', event)}
        />
        <input
          id="contact"
          placeholder={t('work.contactPlaceholder')}
          className="outline-none placeholder-gray-700 mr-8 sm:mr-0 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={data.contact}
          onChange={(event) => handleDataChange('contact', event)}
        />
      </div>

      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input
          id="portfolio-prefix"
          placeholder={t('work.portfolioPrefix')}
          className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={prefix.portfolio}
          onChange={(event) => handlePrefixChange('portfolio', event)}
        />
        <input
          id="portfolio"
          placeholder={t('work.portfolioPlaceholder')}
          className="outline-none placeholder-gray-700 mr-8 sm:mr-0 text-blue-700 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={link.portfolio}
          onChange={(event) => handleLinkChange('portfolio', event)}
        />
      </div>
      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input
          id="blog-prefix"
          placeholder={t('work.blogPrefix')}
          className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={prefix.blog}
          onChange={(event) => handlePrefixChange('blog', event)}
        />
        <input
          id="blog"
          placeholder={t('work.blogPlaceholder')}
          className="outline-none placeholder-gray-700 mr-8 sm:mr-0 text-blue-700 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={link.blog}
          onChange={(event) => handleLinkChange('blog', event)}
        />
      </div>
      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input
          id="resume-prefix"
          placeholder={t('work.resumePrefix')}
          className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={prefix.resume}
          onChange={(event) => handlePrefixChange('resume', event)}
        />
        <input
          id="resume"
          placeholder={t('work.resumePlaceholder')}
          className="outline-none placeholder-gray-700 mr-8 sm:mr-0 text-blue-700 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={link.resume}
          onChange={(event) => handleLinkChange('resume', event)}
        />
      </div>

      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input
          id="funFact-prefix"
          placeholder={t('work.funFactPrefix')}
          className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={prefix.funFact}
          onChange={(event) => handlePrefixChange('funFact', event)}
        />
        <input
          id="funFact"
          placeholder={t('work.funFactPlaceholder')}
          className="outline-none placeholder-gray-700 mr-8 sm:mr-0 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={data.funFact}
          onChange={(event) => handleDataChange('funFact', event)}
        />
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
