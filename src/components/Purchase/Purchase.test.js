import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Purchase from './Purchase';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Purchase />
        </BrowserRouter>, 
    div);
    ReactDOM.unmountComponentAtNode(div);
});