import React from 'react';

const Subtitle = (props) => {
    return (
        <div className="section">
            <h3>Subtitle</h3>
            <input id="subtitle" className="inputField lg prefix" value={props.data.subtitle} 
            onChange={event => props.handleDataChange('subtitle', event)} />
        </div>
    );
}

export default Subtitle;