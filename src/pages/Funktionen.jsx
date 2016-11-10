import React from 'react';
import { Link } from 'react-router';

import Hero from './../components/Hero';
import ContentWrapper from './../components/ContentWrapper';

import './Funktionen.scss';

const Funktionen = ({data}) => (
  <div className="funktionen">
    <Hero img="header-funktionen.jpg">
      <span>EIN LOGIN.<br/>VIELE MÖGLICHKEITEN.</span>
    </Hero>

    <ContentWrapper className="funktionen__intro">

      <h1 className="title--center">{data.funktionen.title}</h1>
      <p className="title__copy">{data.funktionen.titlecopy}</p>

    </ContentWrapper>


    <ContentWrapper className="funktionen__functions-list">

      <div className="function align-left" style={{backgroundColor: data.funktionen.bullet1color}}>
        <div className="function__img">
          <img src="/static/images/functions1-everywhere.jpg" width="557" alt="Alle Telekom Produkte jederzeit und überall" /> 
        </div>
        <div className="function__copy">
          <h2>{data.funktionen.bullet1head}</h2>
          <p>{data.funktionen.bullet1copy}</p>
        </div>
      </div>


      <div className="function align-left" style={{backgroundColor: data.funktionen.bullet2color}}>
        <div className="function__img">
          <img src="/static/images/functions2-pin.png" width="412" alt="Jugendschutz bei Entertain stärken: Mit der Benutzer-Pin" /> 
        </div>
        <div className="function__copy">
          <h2>{data.funktionen.bullet2head}</h2>
          <p>{data.funktionen.bullet2copy}</p>
        </div>
      </div>
    </ContentWrapper>


    <ContentWrapper className="login-settings">
      <div className="login-settings__img">
        <img src="/static/images/login-settings.jpg" alt="Login Einstellungen: Ihr Telekom Login Kontrollzentrum" />
      </div>
      <div className="login-settings__copy">
        <h2>Login Einstellungen: Ihr Telekom Login Kontrollzentrum</h2>
        <p>
          Verwalten Sie Benutzerdaten, Freigaben und Funktionen zentral in den Einstellungen Ihres Telekom Logins.
        </p>
        <p>
          <Link to="/" className="button button-gray">Login Einstellungen</Link>
        </p>
      </div>
    </ContentWrapper>

    
  </div>
);

export default Funktionen;
