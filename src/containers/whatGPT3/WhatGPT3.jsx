import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = (props) => (
  <div className='gpt3__whatgpt3 '>
    <div className="gpt3__whatgpt3-card gradient__card section__margin" id="wgpt3">
         <div className='what-title'>What is AdaLink?</div>
         <div className='what-text'>AdaLink is a blockchain-based Affiliate Network built on Cardano. Our platform streamlines the management of partnerships by connecting stake pool operators and Cardano businesses with creators, influencers, NFT founders, and publishers.</div>
          <div className='iframe-container-limiter'>
            <div className='iframe-container'>
            <iframe src="https://player.vimeo.com/video/990167454?h=c997c871fb&badge=0&autoplay=1&loop=1&autopause=0&muted=1&background=1" frameborder="0" allow="autoplay; fullscreen" ></iframe>
            </div>
          </div>
    </div>
  </div>
);

export default WhatGPT3;