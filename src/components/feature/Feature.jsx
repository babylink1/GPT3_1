import React from 'react';

import './feature.css';

export default ({ title, text, showLine }) => (
    <>
        <div className="gpt3__features-container__feature">
            <div className="gpt3__features-container__feature-title">
                {showLine && <div className='line-gradient'></div>}
                <h1>{title}</h1>
            </div>
            <div className="gpt3__features-container_feature-text">
                <p>{text}</p>
            </div>
        </div>
    </>

);


