import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import IdleService from '../../services/idle-service';
import './Header.css';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Building } from '../../utils/Icons';

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
      <div className="nav-logout">
        <Link
          onClick={this.handleLogoutClick}
          to='/'
          style={{ textDecoration: 'none' }}
          className="nav-text"
        >
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className="nav-login">
        <Link
          to='/register'
          style={{ textDecoration: 'none' }}
          className="nav-text"
        >
          Register
        </Link>
        <Link
          to='/login'
          style={{ textDecoration: 'none' }}
          className="nav-text"
        >
          Login
        </Link>
      </div>
    )
  }

  render() {
    return (
      <div className="header">
        <div className="header-left">
          <div className="icon">{Building}</div>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h2 className="title">SoundlyInvest</h2>
          </Link>
        </div>
        <div className="header-progress">
          {TokenService.hasAuthToken() ? <ProgressBar className="header-progress"/> : ''}
        </div>
          {TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}
      </div>
    );
  }
}

export default Header;