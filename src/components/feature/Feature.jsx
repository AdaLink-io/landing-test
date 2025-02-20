import React from 'react';
import './feature.css';

const Feature = ({ title, text,number }) => (
  <div className="gpt3__features-container__feature">
    <div className='gpt3__features-container__feature-number'>{number}</div>
    <div className="gpt3__features-container__feature-title">

      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
    
  </div>
  
);

export default Feature;