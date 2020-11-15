import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import './Header.css';
import ProgressBar from '../ProgressBar/ProgressBar';

class Header extends Component {
  render() {
    return (
      <div className="header">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h2 className="title">SoundlyInvest</h2>
          </Link>
          <NavLink to="/reports" activeClassName="active">
            Saved Reports
          </NavLink>
          <ProgressBar />
      </div>
    );
  }
}

export default Header;