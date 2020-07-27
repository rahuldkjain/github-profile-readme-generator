import React from 'react';

const Title = (props) => {
    return (
        <div className="section">
            <div className="section-title">Title</div>
            <input id="title-prefix" className="inputField sm prefix" value={props.prefix.title} 
            onChange={event => props.handlePrefixChange('title', event)} />
            <input id="title-name" placeholder="name" className="inputField md" value={props.data.title} 
            onChange={event => props.handleDataChange('title', event)} />
        </div>
    );
}

export default Title;