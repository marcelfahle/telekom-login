import React from 'react';
import { Link } from 'react-router';

import Hero from './../components/Hero';
import ContentWrapper from './../components/ContentWrapper';

import './Home.scss';



const Home = ({ data } ) => (
  <div className="home">
    <Hero 
      img="header-home.jpg"
      aspectClass="aspect16-5plus"
      >
      <span>TELEKOM LOGIN:</span><br/>
      WEIL EINFACH EINLOGGEN EINFACHER IST
    </Hero>

    <ContentWrapper className="home__intro">
      <p className="home__intro--login-button">
        <img src="/static/images/login-button-big.png" 
          alt="Ein Login für Ihre Telekom Dienste"
          width="216"
        />
      </p>

      <h1 className="title--center">{data.home.title}</h1>
      <p className="title__copy">{data.home.titlecopy}</p>


      <div className="home__intro--keyfeatures">
        <div className="home__intro--keyfeature">
          <div className="keyfeature-imgwrapper">
            <img src="/static/images/home-feature1-bequem.svg" alt="Einfach bequem" />
          </div>
          <h2>{data.home.bullet1head}</h2>
          <p>{data.home.bullet2copy}</p>
        </div>
        <div className="home__intro--keyfeature">
          <div className="keyfeature-imgwrapper">
            <img src="/static/images/home-feature2-flexibel.svg" alt="Einfach flexibel" />
          </div>
          <h2>{data.home.bullet2head}</h2>
          <p>{data.home.bullet2copy}</p>
        </div>
        <div className="home__intro--keyfeature">
          <div className="keyfeature-imgwrapper">
            <img src="/static/images/home-feature3-sicher.svg" alt="Einfach sicher" />
          </div>
          <h2>{data.home.bullet3head}</h2>
          <p>{data.home.bullet3copy}</p>
        </div>
      </div>
      <div className="keyfeatures_cta cta">
        <Link to="/funktionen" className="button button-gray">Alle Funktionen entdecken</Link>
      </div>




      <div className="services__intro">
        <h1 className="title--center">{data.home.serviceshead}</h1>
        <p className="title__copy">
          {data.home.servicescopy}
        </p>
        <div className="services__intro-imgwrapper">
          <img src="/static/images/home-services-intro.png" 
            alt="Alle Telekom Dienste im Überblick" 
          />
        </div>
        <div className="services_cta cta">
          <button className="button button-gray">Zu den Diensten</button>
        </div>
        
      </div>


    </ContentWrapper>


    <Hero 
      img="hero-notyetregistered.jpg"
      aspectClass="aspect16-7"
      >
      <span>
        NOCH NICHT REGISTRIERT?<br/>
        IHRE ERSTEN SCHRITTE MIT DEM TELEKOM LOGIN
      </span>
      <p className="hero-cta">
        <button className="button button-gray">So geht's !</button>
      </p>
    </Hero>

  </div>

);

export default Home;
