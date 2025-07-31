import React from 'react';
import PropTypes from 'prop-types';

const Support = (props) => {
  const { support, handleSupportChange } = props;
  return (
    <div id="support-section" className="px-2 sm:px-6 mb-4">
      <div className="text-xl sm:text-2xl font-bold font-title mt-2 mb-2">Support</div>
      <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center">
        <div className="w-full sm:w-1/2 flex flex-col sm:flex-row justify-start items-start sm:items-center text-xxs sm:text-lg py-2 sm:py-4">
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            className="w-32 h-7 sm:w-52 sm:h-12 mb-2 sm:mb-0 sm:mr-4"
            alt="buymeacoffee"
          />
          <input
            id="buy-me-a-coffee"
            placeholder="buymeacoffee username"
            className="outline-none placeholder-gray-700 w-full sm:w-1/2 max-w-[200px] border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-1 focus:border-blue-700"
            value={support.buyMeACoffee || ''}
            onChange={(event) => handleSupportChange('buyMeACoffee', event)}
          />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col sm:flex-row justify-start items-start sm:items-center text-xxs sm:text-lg py-2 sm:py-4">
          <img
            src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3"
            className="w-32 h-7 sm:w-52 sm:h-12 mb-2 sm:mb-0 sm:mr-4"
            alt="buymeakofi"
          />
          <input
            id="buy-me-a-kofi"
            placeholder="Ko-fi username"
            className="outline-none placeholder-gray-700 w-full sm:w-1/2 max-w-[200px] border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-1 focus:border-blue-700"
            value={support.buyMeAKofi || ''}
            onChange={(event) => handleSupportChange('buyMeAKofi', event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
Support.propTypes = {
  support: PropTypes.object.isRequired,
  handleSupportChange: PropTypes.func.isRequired,
};
