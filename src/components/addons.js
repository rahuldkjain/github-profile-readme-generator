import React from "react"
import { latestBlogs } from "../utils/workflows"
import links from "../constants/page-links"
import { isMediumUsernameVaid } from "../utils/validation"
const Addons = (props) => {
    const blogPostPorkflow = () => {
        let payload = {
            dev: {
                show: props.data.devDynamicBlogs,
                username: props.social.dev,
            },
            medium: {
                show: props.data.mediumDynamicBlogs,
                username: props.social.medium,
            }
        }
        var actionContent = latestBlogs(payload);
        var tempElement = document.createElement('a');
        tempElement.setAttribute('href', 'data:text/yaml;charset=utf-8,' + encodeURIComponent(actionContent));
        tempElement.setAttribute('download', 'blog-post-workflow.yml');
        tempElement.style.display = 'none';
        document.body.appendChild(tempElement);
        tempElement.click();
        document.body.removeChild(tempElement);
    }
    return (
        <div className="section">
            <div className="section-title">Add-ons</div>
            <div className="checkbox">
                <label htmlFor="visitors-count" className="checkboxLabel">
                    <input type="checkbox" id="visitors-count" checked={props.data.visitorsBadge}
                        onChange={event => props.handleCheckChange('visitorsBadge')} />&nbsp; display visitors count badge
                </label>
            </div>
            <div className="checkbox">
                <label htmlFor="github-stats" className="checkboxLabel">
                    <input id="github-stats" type="checkbox" checked={props.data.githubStats}
                        onChange={event => props.handleCheckChange('githubStats')} />&nbsp; display github profile stats card
                </label>
            </div>
            <div className="checkbox">
                <label htmlFor="dev-dynamic-blogs" className="checkboxLabel">
                    <input id="dev-dynamic-blogs" type="checkbox" checked={props.data.devDynamicBlogs}
                        onChange={event => props.handleCheckChange('devDynamicBlogs')} />&nbsp; display latest dev.to blogs dynamically (Github Action)
                </label>
            </div>
            <div className="checkbox">
                <label htmlFor="medium-dynamic-blogs" className="checkboxLabel">
                    <input id="medium-dynamic-blogs" type="checkbox" checked={props.data.mediumDynamicBlogs}
                        onChange={event => props.handleCheckChange('mediumDynamicBlogs')} />&nbsp; display latest medium blogs dynamically (Github Action)
                </label>
            </div>

            {(props.data.devDynamicBlogs && props.social.dev) || (props.data.mediumDynamicBlogs && props.social.medium && isMediumUsernameVaid(props.social.medium)) ?
                <div className="workflow">
                    <div>
                        download
                        <span onClick={blogPostPorkflow} role="button" tabIndex="0" style={{ cursor: 'pointer', color: '#002ead' }}> blog-post-workflow.yml</span> file(learn
                        <a href={links.addons} target="blank" style={{ color: '#002ead' }}> how to setup</a>)
                    </div>
                </div> : ''}
        </div>
    )
}

export default Addons;