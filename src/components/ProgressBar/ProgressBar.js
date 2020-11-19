import React, { Component } from 'react';
import { ArrowRight, CircleSolid, CircleOpen } from '../../utils/Icons';
import SoundlyInvestContext from '../../contexts/SoundlyInvestContext';
import './ProgressBar.css';

class ProgressBar extends Component {    
  static contextType = SoundlyInvestContext;

  render() {
    return (
      <nav className="progressbar">
        <span className="dot">{this.context.pagePurchase ? CircleSolid : CircleOpen}</span>
        <span className="arrow">{ArrowRight}</span>
        <span className="dot">{this.context.pageIncome ? CircleSolid : CircleOpen}</span>
        <span className="arrow">{ArrowRight}</span>
        <span className="dot">{this.context.pageExpenses ? CircleSolid : CircleOpen}</span>  
        <span className="arrow">{ArrowRight}</span>
        <span className="dot">{this.context.pageReport ? CircleSolid : CircleOpen}</span>
      </nav>
    );
  }
}

export default ProgressBar;