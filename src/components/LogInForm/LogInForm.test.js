import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LogInForm from './LogInForm';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <LogInForm />
        </BrowserRouter>, 
    div);
    ReactDOM.unmountComponentAtNode(div);
});