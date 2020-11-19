import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Reports from './Reports';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Reports />
        </BrowserRouter>, 
    div);
    ReactDOM.unmountComponentAtNode(div);
});