import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <p>
          SoundlyInvest helps you make a sound real estate investment.
        </p>
        <form>
          <label for="address">Enter an address: </label>
          <input type="text" name="address" />
          <Link to="/income">
            <input type="submit" />
          </Link>
        </form>
      </div>
    );
  }
}

export default Landing;