import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Subtitle = (props) => {
  const { data, handleDataChange } = props;
  const { t } = useTranslation();
  
  return (
    <div className="flex justify-center items-start flex-col w-full px-2 sm:px-6 mb-10">
      <div className="text-xl sm:text-2xl font-bold font-title mt-2 mb-2">{t('sections.subtitle')}</div>
      <input
        id="subtitle"
        placeholder={t('work.defaultSubtitle')}
        className="outline-none placeholder-gray-700 w-full text-xs sm:text-lg sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
        value={data.subtitle}
        onChange={(event) => handleDataChange('subtitle', event)}
      />
    </div>
  );
};

export default Subtitle;
Subtitle.propTypes = {
  data: PropTypes.object.isRequired,
  handleDataChange: PropTypes.func.isRequired,
};
