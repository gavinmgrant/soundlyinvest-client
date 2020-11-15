import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <nav className="footer">
          <section className="footer-nav">
            <NavLink to="/reports" activeClassName="active">
              Saved Reports
            </NavLink>
          </section>
          <section className='copyright'>
              © 2020 <a href='https://gavingrant.dev/' target='_blank' rel='noopener noreferrer'>Gavin Grant</a>
          </section>
      </nav>
    );
  }
}
  
  export default Footer;