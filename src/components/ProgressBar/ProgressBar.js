import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from '../../utils/Icons';
import './ProgressBar.css';

class ProgressBar extends Component {
  render() {
    return (
      <nav className="progressbar">
          <ul className="progressbar-list">
            <NavLink to="/purchase" activeClassName="active">
              <li className="progressbar-item">Purchase</li>
            </NavLink>
            <span className="arrow">{ArrowRight}</span>
            <NavLink to="/income" activeClassName="active">
              <li className="progressbar-item">Income</li>
            </NavLink>
            <span className="arrow">{ArrowRight}</span>
            <NavLink to="/expenses" activeClassName="active">
              <li className="progressbar-item">Expenses</li>
            </NavLink>
            <span className="arrow">{ArrowRight}</span>
            <NavLink to="/report" activeClassName="active">
              <li className="progressbar-item">Report</li>
            </NavLink>
          </ul>
      </nav>
    );
  }
}

export default ProgressBar;