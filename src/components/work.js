import React from 'react';

const Work = (props) => {
    return (
        <div className="section">
            <h3>Work</h3>
            <div className="row">
                <input id="currentWork-prefix" className="inputField md prefix" value={props.prefix.currentWork} 
                onChange={event => props.handlePrefixChange('currentWork', event)} />
                <input id="currentWork" placeholder="project name" className="inputField sm" value={props.data.currentWork} 
                onChange={event => props.handleDataChange('currentWork', event)} />
                <input id="currentWork-link" placeholder="project link" className="inputField md link" 
                value={props.link.currentWork} onChange={event => props.handleLinkChange('currentWork', event)} />
            </div>
            <div className="row">
                <input id="collaborateOn-prefix" className="inputField md prefix" value={props.prefix.collaborateOn} 
                onChange={event => props.handlePrefixChange('collaborateOn', event)} />
                <input id="collaborateOn" placeholder="project name" className="inputField sm" 
                value={props.data.collaborateOn} onChange={event => props.handleDataChange('collaborateOn', event)} />
                <input id="collaborateOn-link" placeholder="project link" className="inputField md link" 
                value={props.link.collaborateOn} onChange={event => props.handleLinkChange('collaborateOn', event)} />
            </div>
            <div className="row">
                <input id="helpWith-prefix" className="inputField md prefix" value={props.prefix.helpWith}
                onChange={event => props.handlePrefixChange('helpWith', event)} />
                <input id="helpWith" placeholder="project name" className="inputField sm"
                value={props.data.helpWith} onChange={event => props.handleDataChange('helpWith', event)} />
                <input id="helpWith-link" placeholder="project link" className="inputField md link"
                value={props.link.helpWith} onChange={event => props.handleLinkChange('helpWith', event)} />
            </div>
            
            <div className="row">
                <input id="currentLearn-prefix" className="inputField md prefix" value={props.prefix.currentLearn}
                onChange={event => props.handlePrefixChange('currentLearn', event)} />
                <input id="currentLearn" placeholder="Frameworks, courses etc." className="inputField md"
                value={props.data.currentLearn} onChange={event => props.handleDataChange('currentLearn', event)} />
            </div>
            <div className="row">
                <input id="ama-prefix" className="inputField md prefix" value={props.prefix.ama}
                onChange={event => props.handlePrefixChange('ama', event)} />
                <input id="ama" placeholder="react, vue and gsap" className="inputField md"
                value={props.data.ama} onChange={event => props.handleDataChange('ama', event)} />
            </div>
            
            <div className="row">
                <input id="contact-prefix" className="inputField md prefix" value={props.prefix.contact}
                onChange={event => props.handlePrefixChange('contact', event)} />
                <input id="contact" placeholder="example@gmail.com" className="inputField md"
                value={props.data.contact} onChange={event => props.handleDataChange('contact', event)} />
            </div>

            <div className="row">
                <input id="portfolio-prefix" className="inputField md prefix" value={props.prefix.portfolio}
                onChange={event => props.handlePrefixChange('portfolio', event)} />
                <input id="portfolio" placeholder="portfolio link" className="inputField md"
                value={props.link.portfolio} onChange={event => props.handleLinkChange('portfolio', event)} />
            </div>
            <div className="row">
                <input id="blog-prefix" className="inputField md prefix" value={props.prefix.blog}
                onChange={event => props.handlePrefixChange('blog', event)} />
                <input id="blog" placeholder="blog link" className="inputField md"
                value={props.link.blog} onChange={event => props.handleLinkChange('blog', event)} />
            </div>
            <div className="row">
                <input id="funFact-prefix" className="inputField md prefix" value={props.prefix.funFact}
                onChange={event => props.handlePrefixChange('funFact', event)} />
                <input id="funFact" placeholder="Chai over Coffee" className="inputField md"
                value={props.data.funFact} onChange={event => props.handleDataChange('funFact', event)} />
            </div>
        </div>
    );
}

export default Work;