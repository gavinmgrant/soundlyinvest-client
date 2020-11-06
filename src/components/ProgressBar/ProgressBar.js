import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from '../../utils/Icons';
import './ProgressBar.css';

class ProgressBar extends Component {
  render() {
    return (
      <nav className="progressbar">
          <ul className="progressbar-list">
            <NavLink to="/income" activeClassName="active">
              <li className="progressbar-item">Income</li>
            </NavLink>
            <span className="arrow">{ArrowRight}</span>
            <NavLink to="/expenses" activeClassName="active">
              <li className="progressbar-item">Expenses</li>
            </NavLink>
            <span className="arrow">{ArrowRight}</span>
            <NavLink to="/loan" activeClassName="active">
              <li className="progressbar-item">Loan</li>
            </NavLink>
            <span className="arrow">{ArrowRight}</span>
            <NavLink to="/goals" activeClassName="active">
              <li className="progressbar-item">Goals</li>
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