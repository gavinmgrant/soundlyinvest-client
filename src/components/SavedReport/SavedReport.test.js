import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SavedReport from './SavedReport';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <SavedReport />
        </BrowserRouter>, 
    div);
    ReactDOM.unmountComponentAtNode(div);
});