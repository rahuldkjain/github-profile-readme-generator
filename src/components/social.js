import React from 'react';

const Social = (props) => {
    return (
        <div className="px-2 sm:px-6 mb-4">
            <div className="text-xl sm:text-2xl font-bold font-title mt-2 mb-2">Social</div>
            <div className="flex flex-wrap justify-center items-center">
                <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
                        className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4" alt="github" />
                    <input id="github" placeholder="github username"
                        className="placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-1 sm:px-2 focus:border-blue-700"
                        value={props.social.github} onChange={event => props.handleSocialChange('github', event)} />
                </div>
                <div className="w-1/2  flex justify-center items-center text-xxs sm:text-lg py-4">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg"
                        className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4" alt="twitter" />
                    <input id="twitter" placeholder="twitter username"
                        className="placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                        value={props.social.twitter} onChange={event => props.handleSocialChange('twitter', event)} />
                </div>
                <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg"
                        className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4" alt="dev.to" />
                    <input id="dev" placeholder="dev.to username" className="placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                        value={props.social.dev} onChange={event => props.handleSocialChange('dev', event)} />
                </div>
                <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codepen.svg"
                        className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4" alt="codepen" />
                    <input id="codepen" placeholder="codepen username" className="placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                        value={props.social.codepen} onChange={event => props.handleSocialChange('codepen', event)} />
                </div>
                <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codesandbox.svg"
                        className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4" alt="codesandbox" />
                    <input id="codesandbox" placeholder="codesandbox username" className="placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                        value={props.social.codesandbox} onChange={event => props.handleSocialChange('codesandbox', event)} />
                </div>
                <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/stackoverflow.svg"
                        className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4" alt="stackoverflow" />
                    <input id="stackoverflow" placeholder="stackoverflow user ID" className="placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                        value={props.social.stackoverflow} onChange={event => props.handleSocialChange('stackoverflow', event)} />
                </div>
                <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
                        className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4" alt="linkedin" />
                    <input id="linkedin" placeholder="linkedin username" className="placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                        value={props.social.linkedin} onChange={event => props.handleSocialChange('linkedin', event)} />
                </div>
                <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/kaggle.svg"
                        className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4" alt="kaggle" />
                    <input id="kaggle" placeholder="kaggle username" className="placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                        value={props.social.kaggle} onChange={event => props.handleSocialChange('kaggle', event)} />
                </div>
                <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg"
                        className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4" alt="facebook" />
                    <input id="fb" placeholder="facebook username" className="placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                        value={props.social.fb} onChange={event => props.handleSocialChange('fb', event)} />
                </div>
                <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg"
                        className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4" alt="instagram" />
                    <input id="instagram" placeholder="instagram username" className="placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                        value={props.social.instagram} onChange={event => props.handleSocialChange('instagram', event)} />
                </div>
                <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/dribbble.svg"
                        className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4" alt="dribbble" />
                    <input id="dribbble" placeholder="dribbble username" className="placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                        value={props.social.dribbble} onChange={event => props.handleSocialChange('dribbble', event)} />
                </div>
                <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/behance.svg"
                        className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4" alt="behance" />
                    <input id="behance" placeholder="behance username" className="placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                        value={props.social.behance} onChange={event => props.handleSocialChange('behance', event)} />
                </div>
                <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/medium.svg"
                        className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4" alt="medium" />
                    <input id="medium" placeholder="medium username (with @)" className="placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                        value={props.social.medium} onChange={event => props.handleSocialChange('medium', event)} />
                </div>
                <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/youtube.svg"
                        className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4" alt="youtube" />
                    <input id="youtube" placeholder="youtube channel name" className="placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                        value={props.social.youtube} onChange={event => props.handleSocialChange('youtube', event)} />
                </div>
            </div>
        </div>
    );
}

export default Social;