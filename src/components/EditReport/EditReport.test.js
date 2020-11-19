import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EditReport from './EditReport';

it('renders without crashing', () => {
    const form = document.createElement('form');
    ReactDOM.render(
        <BrowserRouter>
            <EditReport />
        </BrowserRouter>, 
    form);
    ReactDOM.unmountComponentAtNode(form);
});