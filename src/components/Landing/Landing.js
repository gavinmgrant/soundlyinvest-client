import React from 'react';
import { Link } from "react-router-dom";
import PlacesAutoComplete from '../PlacesAutoComplete/PlacesAutoComplete';
import './Landing.css';
import { useLoadScript } from '@react-google-maps/api';

const libraries = ["places"];

export default function Landing() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  if (loadError) return "Error loading the map.";
  if (!isLoaded) return "Loading the map...";

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
};