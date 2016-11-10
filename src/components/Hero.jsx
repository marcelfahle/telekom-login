import React from 'react';

import ContentWrapper from './ContentWrapper';


import './Hero.scss';


const Hero = ({ children, img, aspectClass = "aspect16-5" }) => (
  <div className="hero">
    <ContentWrapper className="content-wrapper__hero">
      <div className={`hero__image--wrapper ${aspectClass}`}>
        <img src={`/static/images/${img}`} className="hero__image" alt=""/>
      </div>
      <div className="hero__display">
        {children}
      </div>
    </ContentWrapper>
  </div>

);

export default Hero;
