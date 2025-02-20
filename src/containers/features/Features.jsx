import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Customizable Programs',
    text: 'Tailor unique affiliate programs to suit the specific needs of your business, boosting your brand’s reach and your company’s growth.',
  },
  {
    title: 'Transparent Tracking',
    text: 'Our platform leverages blockchain technology for precise and transparent tracking of all affiliate conversions and performance.',
  },
  {
    title: 'Reward Distribution',
    text: "Automate payout processes with smart contracts, ensuring timely and accurate reward distribution.",
  },
  {
    title: 'Community and Support',
    text: "Join a community of like-minded Cardano businesses and affiliates, and access premium support and resources to maximize your affiliate marketing strategy.",
  },
];

const Features = (props) => (
  <div className='gpt3__features'>
    <div className="gpt3__features-card  section__margin" id="workflow">
      <div className="gpt3__features-heading">
        <h1 className='normal-text-color'>AdaLink <e className="gradient__text">Benefits</e></h1>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} number={index+1} />
        ))}
      </div>
      <button className='button-1' style={{maxWidth:"240px",marginLeft:"auto",marginRight:"auto"}} onClick={() => props.setMiddleWindowTrigger(true)}>Get started by signing up</button>
    </div>
  </div>

);

export default Features;