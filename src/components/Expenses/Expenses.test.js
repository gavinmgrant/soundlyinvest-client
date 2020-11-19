import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Expenses from './Expenses';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Expenses />
        </BrowserRouter>, 
    div);
    ReactDOM.unmountComponentAtNode(div);
});