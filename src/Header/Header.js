import React, { Component } from 'react';
import './Header.css';
import ProgressBar from '../ProgressBar/ProgressBar';

class Header extends Component {
  render() {
    return (
      <div className="header">
          <h1 className="title">SoundlyInvest</h1>
          <ProgressBar />
      </div>
    );
  }
}

export default Header;