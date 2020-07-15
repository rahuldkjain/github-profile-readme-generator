import React from 'react';

const Social = (props) => {
    return (
        <div className="section">
            <h3>Social</h3>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
                    className="icon" alt="github" />
                <input id="github" placeholder="github username" className="inputField lg"
                value={props.social.github} onChange={event => props.handleSocialChange('github', event)} />
            </div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg"
                className="icon" alt="twitter" />
                <input id="twitter" placeholder="twitter username" className="inputField lg"
                value={props.social.twitter} onChange={event => props.handleSocialChange('twitter', event)} />
            </div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg"
                className="icon" alt="dev.to" />
                <input id="dev" placeholder="dev.to username" className="inputField lg"
                value={props.social.dev} onChange={event => props.handleSocialChange('dev', event)} />
            </div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codepen.svg"
                className="icon" alt="codepen" />
                <input id="codepen" placeholder="codepen username" className="inputField lg"
                value={props.social.codepen} onChange={event => props.handleSocialChange('codepen', event)} />
            </div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codesandbox.svg"
                className="icon" alt="codesandbox" />
                <input id="codesandbox" placeholder="codesandbox username" className="inputField lg"
                value={props.social.codesandbox} onChange={event => props.handleSocialChange('codesandbox', event)} />
            </div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/stackoverflow.svg"
                className="icon" alt="stackoverflow" />
                <input id="stackoverflow" placeholder="stackoverflow username" className="inputField lg"
                value={props.social.stackoverflow} onChange={event => props.handleSocialChange('stackoverflow', event)} />
            </div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
                className="icon" alt="linkedin" />
                <input id="linkedin" placeholder="linkedin username" className="inputField lg"
                value={props.social.linkedin} onChange={event => props.handleSocialChange('linkedin', event)} />
            </div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/kaggle.svg"
                className="icon" alt="kaggle" />
                <input id="kaggle" placeholder="kaggle username" className="inputField lg"
                value={props.social.kaggle} onChange={event => props.handleSocialChange('kaggle', event)} />
            </div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg"
                className="icon" alt="facebook" />
                <input id="fb" placeholder="facebook username" className="inputField lg"
                value={props.social.fb} onChange={event => props.handleSocialChange('fb', event)} />
            </div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg"
                className="icon" alt="instagram" />
                <input id="instagram" placeholder="instagram username" className="inputField lg"
                value={props.social.instagram} onChange={event => props.handleSocialChange('instagram', event)} />
            </div>
        </div>
    );
}

export default Social;