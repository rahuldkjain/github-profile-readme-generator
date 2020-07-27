import React from 'react';

const Addons = (props) => {
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
        </div>
    )
}

export default Addons;