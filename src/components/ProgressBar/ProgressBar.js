import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, CircleSolid, CircleOpen } from '../../utils/Icons';
import SoundlyInvestContext from '../../contexts/SoundlyInvestContext';
import './ProgressBar.css';

class ProgressBar extends Component {    
  static contextType = SoundlyInvestContext;

  render() {
    return (
      <nav className="progressbar">
        <span className="progressbar-title">
          {this.context.pagePurchase ? 'Purchase' : ''}
          {this.context.pageIncome ? 'Income' : ''}
          {this.context.pageExpenses ? 'Expenses' : ''}
          {this.context.pageReport ? 'Report' : ''}
        </span>
        {this.context.pagePurchase ? CircleSolid : CircleOpen}
        <span className="arrow">{ArrowRight}</span>
        {this.context.pageIncome ? CircleSolid : CircleOpen} 
        <span className="arrow">{ArrowRight}</span>
        {this.context.pageExpenses ? CircleSolid : CircleOpen}  
        <span className="arrow">{ArrowRight}</span>
        {this.context.pageReport ? CircleSolid : CircleOpen}
      </nav>
    );
  }
}

export default ProgressBar;