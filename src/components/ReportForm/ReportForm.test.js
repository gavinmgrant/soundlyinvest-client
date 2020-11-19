import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ReportForm from './ReportForm';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <ReportForm />
        </BrowserRouter>, 
    div);
    ReactDOM.unmountComponentAtNode(div);
});