import React from 'react';
import { cardano, catalyst } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={cardano} alt="cardano" />
    </div>
    <div>
      <img src={catalyst} alt="catalyst" />
    </div>
  </div>
);

export default Brand;