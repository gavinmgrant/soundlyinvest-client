import React from 'react';
import { Link } from "react-router-dom";
import PlacesAutoComplete from '../PlacesAutoComplete/PlacesAutoComplete';
import './Landing.css';
import scriptLoader from 'react-async-script-loader';

function Landing( { isScriptLoaded, isScriptLoadSucceed }) {
  if (isScriptLoaded && isScriptLoadSucceed) {
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
  } else {
    return <div>Failed to load.</div>
  }
};

export default scriptLoader([`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`])(Landing);