import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

it('renders without crashing', () => {
    const nav = document.createElement('nav');
    ReactDOM.render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>, 
    nav);
    ReactDOM.unmountComponentAtNode(nav);
});