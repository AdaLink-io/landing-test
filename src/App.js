import {React, useEffect, useState} from 'react'

import { Footer, Blog, Possibility, Features, WhatGPT3, Header, FAQ, MiddleWindow} from './containers';
import { CTA, Brand, Navbar,ScrollButton} from './components';
import './containers/whatExtra.css'
import './containers/frenchieCommunity.css'
import './App.css'
import dollarRefresh from './assets/dollar-refresh.svg';
import searchIcon from './assets/search.svg';
import speakerIcon from './assets/speaker.svg';

let useClickOutside = (handler,elementClass) => {

  useEffect(() => {
      let maybeHandler = (event) => {
              if(event.target.className.toString()==elementClass.toString()){
                  handler();
              }
      };
      document.addEventListener("mousedown", maybeHandler);
         
      return () => {
          document.removeEventListener("mousedown", maybeHandler);
      };
  });
}




const App = () => {
  const[middleWindowTrigger,setMiddleWindowTrigger]=useState(false);
  let middleWindowRef = useClickOutside(() => setMiddleWindowTrigger(false),"outsideMiddleWindow");
  
  return (
    <div className='App'>
        <div >
            <Navbar setMiddleWindowTrigger={setMiddleWindowTrigger}/>
            <Header setMiddleWindowTrigger={setMiddleWindowTrigger} />
        </div>
        
        <WhatGPT3 setMiddleWindowTrigger={setMiddleWindowTrigger}/>
        <div className='what-adalink-extra-container'>
          <div className='what-adalink-extra-title'>The Possiblities are <e className="gradient__text">Endless</e></div>
          <div className='what-adalink-extra-cards-container'>
            <div>
              <div className='what-adalink-extra-card-banner'></div>
              <div className='what-adalink-extra-card-content'>
                <div className='what-adalink-extra-card-img-container'>
                  <img src={speakerIcon} alt={'speaker icon'}/>
                </div>
                <div className='what-adalink-extra-card-title'>Amplify Your Reach</div>
                <div className='what-adalink-extra-card-text'>We equip every SPO and Cardano business with essential tools to create custom affiliate partnerships and evaluate partnership performance effectively. Gain visibility and achieve substantial growth within the Cardano ecosystem through AdaLink.</div>
              </div>
            </div>
            <div>
              <div className='what-adalink-extra-card-banner'></div>
              <div className='what-adalink-extra-card-content'>
                <div className='what-adalink-extra-card-img-container'>
                  <img src={searchIcon} alt={'search icon'}/>
                </div>
                <div className='what-adalink-extra-card-title'>Find Your Partners</div>
                <div className='what-adalink-extra-card-text'>Affiliates, including creators, influencers, NFT founders, and publishers, can find Cardano brands and Stake Pool Operators (SPOs) in our Marketplace. Register on the platform to explore and create valuable partnerships and monetize your content.</div>
              </div>
            </div>
            <div>
              <div className='what-adalink-extra-card-banner'></div>
                <div className='what-adalink-extra-card-content'>
                  <div className='what-adalink-extra-card-img-container'>
                    <img src={dollarRefresh} alt={'dollar icon'}/>
                  </div>
                  <div className='what-adalink-extra-card-title'>Performance-Based Rewards</div>
                  <div className='what-adalink-extra-card-text'>At AdaLink, rewards from pool margins or product sales are automatically distributed among affiliates based on their performance, ensuring fair compensation for all contributors.</div>
                </div>
            </div>
          </div>
        </div>
        <Features setMiddleWindowTrigger={setMiddleWindowTrigger}/>
        <FAQ />
        <div className='frenchie-community-container'>
          <div className='frenchie-community-title'>Want to become part of the AdaLink Community?</div>
          <div className='frenchie-community-text'>The Frenchies Club is dedicated to content creation and marketing in Web 3. Members enjoy exclusive access to workshops, sponsorships, and monetization opportunities.</div>
          <button className='button-2'><a href="https://www.frenchies.club/" target="_blank" rel="noopener noreferrer">Get Started</a></button>
        </div>
        <Footer />
        <MiddleWindow trigger={middleWindowTrigger} setTrigger={setMiddleWindowTrigger} ref={middleWindowRef}>
          
        </MiddleWindow>
        <ScrollButton />

    </div>
  )
}

export default App
