import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import { InfoCircle } from '../../utils/Icons';
import './Loan.css';

class Loan extends Component {
  render() {
    return (
        <div className="loan">
            <h3>
                Enter your loan terms below:
            </h3>
            <form>
                <section>
                    <section>
                        <label for="down-payment">Down Payment (%): </label>
                        <span data-tip="Enter a whole number. If 20%, enter 20, not 0.20.">{InfoCircle}</span>
                        <ReactTooltip />
                        <input type="number" name="down-payment" min="0"/>
                    </section>
                    <section>
                        <label for="interest-rate">Interest Rate (%): </label>
                        <span data-tip="Enter a whole number. If 4%, enter 4, not 0.04.">{InfoCircle}</span>
                        <ReactTooltip />
                        <input type="number" name="interest-rate" min="0"/>
                    </section>
                    <section>
                        <label for="loan-period">Loan Period (months): </label>
                        <span data-tip="Enter the number of months until loan is paid off.">{InfoCircle}</span>
                        <ReactTooltip />
                        <input type="number" name="loan-period" min="0" placeholder="360 months is a good starting point."/>
                    </section>
                </section>
                <Link to="/goals">
                    <input className="submit-button" type="submit" value="Next" />
                </Link>
            </form>
        </div>
    );
  }
}

export default Loan;