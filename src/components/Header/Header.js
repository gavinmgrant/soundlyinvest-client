import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import IdleService from '../../services/idle-service';
import './Header.css';
import ProgressBar from '../ProgressBar/ProgressBar';

class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    window.location.reload(false);
    // when logging out, clear the callbacks to the refresh api and idle auto logout
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
  }

  // renders the links for when users are signed in
  renderLogoutLink() {
    return (
      <Link
          onClick={this.handleLogoutClick}
          to='/'
          style={{ textDecoration: 'none' }}
      >
        Log Out
      </Link>
    )
  }

  renderRegisterLink() {
    return (
      <Link
          to='/register'
          style={{ textDecoration: 'none' }}
      >
        Register
      </Link>
    )
  }

  render() {
    return (
      <div className="header">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h2 className="title">SoundlyInvest</h2>
          </Link>
          {TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderRegisterLink()}
          <ProgressBar />
      </div>
    );
  }
}

export default Header;