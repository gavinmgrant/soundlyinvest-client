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
        <h3>
          Soundly invest in real estate.
        </h3>
        <form>
          <label for="address">Start by entering an address: </label>
          <input type="text" name="address" />
          <Link to="/income">
            <input className="submit-button" type="submit" value="Next" />
          </Link>
        </form>
      </div>
    );
  }
}

export default Landing;