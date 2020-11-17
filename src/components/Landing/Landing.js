import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import PlacesAutoComplete from '../PlacesAutoComplete/PlacesAutoComplete';
import './Landing.css';
import scriptLoader from 'react-async-script-loader';
import SoundlyInvestContext from '../../contexts/SoundlyInvestContext';
import ValidationError from '../ValidationError/ValidationError';

function Landing( { isScriptLoaded, isScriptLoadSucceed }) {
  const context = useContext(SoundlyInvestContext);

  const validateAddress = () => {
    if (!context.propAddress) {
        return 'An address is required to continue.';
    }
  };

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
          <PlacesAutoComplete />
          <Link to={!context.propAddress ? "/" : "/purchase"}>
            <input className="submit-button" type="submit" value="Next" disabled={validateAddress()}/>
          </Link>
          <ValidationError message={validateAddress()}/>
        </form>
      </div>
    );
  } else {
    return <div>Failed to load.</div>
  }
};

export default scriptLoader([`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`])(Landing);