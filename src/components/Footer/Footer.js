import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <nav className="footer">
        <section className="footer-nav">
          {TokenService.hasAuthToken() ?  
            <NavLink to="/reports" activeClassName="active" className="saved-reports">
              Saved Reports
            </NavLink>
          : ''}
        </section>
        <section className='copyright'>
          <a 
            href="https://gavingrant.dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="copyright-link"
          >© 2020 Gavin Grant
          </a>
        </section>
      </nav>
    );
  }
}
  
export default Footer;