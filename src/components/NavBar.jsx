import React from 'react';

import ContentWrapper from './ContentWrapper';

import './NavBar.scss';

const NavBar = () => (
  <div className="header__nav">
    <ContentWrapper>
      <button className="header__nav--menu-toggle">&nbsp;</button>
      <p className="header__nav--breadcrumbs">Start</p>
    </ContentWrapper>
    <div className="header__main-menu">
      <ContentWrapper>
        <nav>
          <ul>
            <li><a href="#">Start</a></li>
            <li><a href="#">Funktionen</a></li>
            <li><a href="#">So geht's</a></li>
          </ul>
        </nav>
      </ContentWrapper>
    </div>
  </div>
);

export default NavBar;
