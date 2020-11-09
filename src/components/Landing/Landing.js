import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PlacesAutoComplete from '../PlacesAutoComplete/PlacesAutoComplete';
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
          <label htmlFor="address">Start by entering an address: </label>
          <PlacesAutoComplete />
          <Link to="/purchase">
            <input className="submit-button" type="submit" value="Next" />
          </Link>
        </form>
      </div>
    );
  }
}

export default Landing;