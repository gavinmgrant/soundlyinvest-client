import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <nav className="footer">
          <section className='copyright'>
              Copyright © 2020 <a href='https://gavingrant.dev/' target='_blank' rel='noopener noreferrer'>Gavin Grant</a>
          </section>
      </nav>
    );
  }
}
  
  export default Footer;