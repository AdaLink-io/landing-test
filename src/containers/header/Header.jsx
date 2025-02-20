import React, {useEffect, useState} from 'react';

import img1 from '../../assets/adalinkMedia1.jpg';
import img2 from '../../assets/adalinkMedia2.jpg';
import img3 from '../../assets/adalinkMedia3.jpg';
import img4 from '../../assets/adalinkMedia4.jpg';
import './header.css';


let imgCounter=1;

const Header = (props) => {
  
  const [currentImg,setCurrentImg] = useState(img1);
  const [opacityClass,setOpacityClass] = useState('full-opacity');
  const [changeImgTrigger,setChangeImgTrigger]=useState(0);
  
  useEffect(() => {

    const firstTick = setInterval(() => {
      setOpacityClass('zero-opacity')
      setTimeout(() => changeImgTrigger==0?setChangeImgTrigger(1):setChangeImgTrigger(0),450);
      setTimeout(() => setOpacityClass('full-opacity'),600);
    }, 15000);

    return () => {
      clearInterval(firstTick);
    };
  });

  useEffect(() => {
      
      //console.log('change img')
      switch(imgCounter){
        case 1:
          setCurrentImg(img2);
          imgCounter=2;
          break;
        case 2:
          setCurrentImg(img3);
          imgCounter=3;
          break;
        case 3:
          setCurrentImg(img4);
          imgCounter=4;
          break;
        case 4:
          setCurrentImg(img1);
          imgCounter=1;
          break;
      }
  },[changeImgTrigger]); // Empty dependency array to run the effect only once


  return (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className='normal-text-color'>Connect</h1>
      <h1 className='normal-text-color'>Collaborate</h1>
      <h1 className="gradient__text">Grow</h1>
      <p>Incentivize collaboration through reward sharing between SPO's, Cardano Businesses & Affiliate Partners. AdaLink is a platform built by the community for the community.</p>
      <button className='button-1'><a href="https://app-preview.adalink.io" target="_blank" rel="noopener noreferrer">Get Started Now</a></button>
    </div>

    <div className="gpt3__header-image">
      <img src={currentImg} className={opacityClass} alt="ai" />
    </div>
  </div>
);
}

export default Header;