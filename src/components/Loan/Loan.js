import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
                        <label for="down-payment">Down Payment Percentage: </label>
                        <input type="number" name="down-payment" min="0"/>
                    </section>
                    <section>
                        <label for="interest-rate">Interest Rate Percentage: </label>
                        <input type="number" name="interest-rate" min="0"/>
                    </section>
                    <section>
                        <label for="loan-period">Loan Period (months): </label>
                        <input type="number" name="loan-period" min="0"/>
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