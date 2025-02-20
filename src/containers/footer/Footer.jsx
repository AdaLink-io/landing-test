import React from 'react';
import cardanoSymbol from '../../assets/cardanoSymbolBlack.png';
import twitterLogo from '../../assets/twitterLogoBlack.png';
import githubLogo from '../../assets/githubSymbolBlack.png';
import vimeoSymbol from '../../assets/vimeoSymbolBlack.png';
import mediumSymbol from '../../assets/mediumSymbolBlack.png';
import './footer.css';

const Footer = () => (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <p> Powered by Cardano </p>
          <img src={cardanoSymbol}/>
        </div>
        <div className="gpt3__footer-links_div">
          <a href="https://vimeo.com/adalink" target="_blank" rel="noopener noreferrer" ><img src={vimeoSymbol}/></a>
          <a href="https://www.medium.com/@AdaLink_io" target="_blank" rel="noopener noreferrer" ><img src={mediumSymbol}/></a>
          <a href="https://github.com/AdaLink-io" target="_blank" rel="noopener noreferrer"><img src={githubLogo}/></a>
          <a href="https://twitter.com/adalink_io" target="_blank" rel="noopener noreferrer"> <img src={twitterLogo} /></a>
        </div>
      </div>
    </div>
);

export default Footer;

