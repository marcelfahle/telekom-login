import React from 'react';

import './Service.scss';


const Service = () => {
  return (
    <li className="service">
      <img src="/static/images/icon-kundencenter.png" alt="Kundencenter" className="service__icon" />
      <div className="service__info">
        <h3>Kundencenter</h3>
        <p>
          Im Telekom Kundencenter verwalten Sie bequem Ihre Verträge und Anschlüsse.
        </p>
      </div>

    </li>
  )
}
export default Service;
