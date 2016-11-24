import React from 'react';
import { Link } from 'react-router';

import './AppPanel.scss';

const AppPanel = () => {
  return (
    <div className="app-panel">
      <ul className="app-panel__apps">
        <li className="app-panel__app">
          <Link to="#">
            <img src="/static/images/icon-kundencenter.png" alt="Kundencenter"/>
            Kundencenter
          </Link>
        </li>
        <li className="app-panel__app">
          <Link to="#">
            <img src="/static/images/icon-kundencenter.png" alt="Kundencenter"/>
            Kundencenter
          </Link>
        </li>
        <li className="app-panel__app">
          <Link to="#">
            <img src="/static/images/icon-kundencenter.png" alt="Kundencenter"/>
            Kundencenter
          </Link>
        </li>
        <li className="app-panel__app">
          <Link to="#">
            <img src="/static/images/icon-kundencenter.png" alt="Kundencenter"/>
            Kundencenter
          </Link>
        </li>
        <li className="app-panel__app">
          <Link to="#">
            <img src="/static/images/icon-kundencenter.png" alt="Kundencenter"/>
            Kundencenter
          </Link>
        </li>
        <li className="app-panel__app">
          <Link to="#">
            <img src="/static/images/icon-kundencenter.png" alt="Kundencenter"/>
            Kundencenter
          </Link>
        </li>
      </ul>

      <p className="app-panel__more-link">
        <Link to="/dienste-uebersicht">
          Alle Dienste anzeigen
        </Link>
      </p>
    </div>
  )
}
export default AppPanel;
