import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import PlacesAutoComplete from '../PlacesAutoComplete/PlacesAutoComplete';
import './Landing.css';
import scriptLoader from 'react-async-script-loader';
import SoundlyInvestContext from '../../contexts/SoundlyInvestContext';
import ValidationError from '../ValidationError/ValidationError';
import LogInForm from '../LogInForm/LogInForm';
import TokenService from '../../services/token-service';

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
        <h1 className="landing-title">
          SoundlyInvest
        </h1>
        <section className="landing-steps">
          <p>
            Soundly invest in a rental property by running the numbers. In three steps, you get a detailed investment report displaying key investment metrics, such as gross rent multiplier, cap rate, net operating income, and cash flow.
          </p>
        </section>
        {TokenService.hasAuthToken() ? '' :
          <div>
            <section className="landing-steps">
              <h2>1. Purchase Information</h2>
              <p>Provide details about your property purchase.</p>
            </section>
            <section className="landing-steps">
              <h2>2. Monthly Income</h2>
              <p>Provide potential income you can earn from rents.</p>
            </section>
            <section className="landing-steps">
              <h2>3. Monthly Expenses</h2>
              <p>Provide potential expenses to operate this investment property.</p>
            </section>
          </div>
        }
        {TokenService.hasAuthToken() ? '' : <LogInForm />}
        {TokenService.hasAuthToken() ? 
          <form className="landing-form">
            <h2 className="landing-form-title">Get Started!</h2>
            <PlacesAutoComplete />
            <Link to={!context.propAddress ? "/" : "/purchase"}>
              <input className="submit-button" type="submit" value="Go" disabled={validateAddress()}/>
            </Link>
            <ValidationError message={validateAddress()}/>
          </form>
        : ''}
      </div>
    );
  } else {
    return <div>Failed to load.</div>
  }
};

export default scriptLoader([`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`])(Landing);