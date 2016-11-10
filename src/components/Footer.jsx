import React from 'react';
import { Link } from 'react-router';

import './Footer.scss';


const Footer = () => (
  <footer>
    <nav className="footer__nav">
      <ul>
        <li><Link to="/funktionen">Funktionen</Link></li>
        <li><Link to="/so-gehts">So geht's</Link></li>
        <li><Link to="/login-mit-telekom">Login mit Telekom</Link></li>
        <li><Link to="/telekom-login-fuer-ihre-website">Telekom Login für Ihre Website</Link></li>
      </ul>
    </nav>

    <div className="footer__social">
      <h4>Folgen Sie uns im Social Web:</h4>
      <nav>
        <ul>
          <li>
            <a href="#">
              FB 
            </a>
          </li>
          <li>
            <a href="#">
              TW
            </a>
          </li>
          <li>
            <a href="#">
              g+ 
            </a>
          </li>
          <li>
            <a href="#">
              a 
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div className="footer__meta">
      <p className="footer__copyright">© 2016 Deutsche Telekom AG</p>
      <nav>
        <ul>
          <li><a href="#">Geschäftskunden</a></li>
          <li><a href="#">Telekom Hilft Community</a></li>
          <li><a href="#">FAQ-Liste</a></li>
          <li><a href="#">Impressum</a></li>
          <li><a href="#">Datenschutz</a></li>
        </ul>
      </nav>
    </div>
    
  
  </footer>
)

export default Footer;
