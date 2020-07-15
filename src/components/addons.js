import React from 'react';

const Addons = (props) => {
    return (
        <div className="section">
            <h3>Add-ons</h3>
            <div className="checkbox">
                <input type="checkbox" checked={props.data.visitorsBadge}
                onChange={event => props.handleCheckChange('visitorsBadge')}/>
                <span className="checkboxLabel"> &nbsp; display visitors count badge</span>
            </div>
            <div className="checkbox">
                <input type="checkbox" checked={props.data.githubStats}
                onChange={event => props.handleCheckChange('githubStats')} />
                <span className="checkboxLabel"> &nbsp; display github profile stats card</span>
            </div>
        </div>
    )
}

export default Addons;