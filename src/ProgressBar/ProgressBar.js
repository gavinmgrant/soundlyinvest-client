import React, { Component } from 'react';
import './ProgressBar.css';

class ProgressBar extends Component {
  render() {
    return (
      <nav className="progressbar">
          <ul className="progressbar-list">
            <li className="progressbar-item">Income --></li>
            <li className="progressbar-item">Expenses --></li>
            <li className="progressbar-item">Loan --></li>
            <li className="progressbar-item">Goals --></li>
            <li className="progressbar-item">Report</li>
          </ul>
      </nav>
    );
  }
}

export default ProgressBar;