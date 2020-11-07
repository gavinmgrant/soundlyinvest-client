import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <h1>
          SoundlyInvest
        </h1>
        <p>
          Soundly invest in a rental property by running the numbers.
        </p>
        <form className="landing-form">
          <label for="address">Start by entering an address: </label>
          <input type="text" name="address" />
          <Link to="/purchase">
            <input className="submit-button" type="submit" value="Next" />
          </Link>
        </form>
      </div>
    );
  }
}

export default Landing;