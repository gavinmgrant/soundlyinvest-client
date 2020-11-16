import React from 'react';
import ReactDOM from 'react-dom';
import PlacesAutoComplete from './PlacesAutoComplete';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PlacesAutoComplete />, div);
    ReactDOM.unmountComponentAtNode(div);
});