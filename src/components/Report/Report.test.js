import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Report from './Report';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Report />
        </BrowserRouter>, 
    div);
    ReactDOM.unmountComponentAtNode(div);
});