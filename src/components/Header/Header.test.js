import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

it('renders without crashing', () => {
    const nav = document.createElement('nav');
    ReactDOM.render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>, 
    nav);
    ReactDOM.unmountComponentAtNode(nav);
});