import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import { InfoCircle } from '../../utils/Icons';
import SoundlyInvestContext from '../../contexts/SoundlyInvestContext';
import './Purchase.css';

class Purchase extends Component {
    static contextType = SoundlyInvestContext;

    constructor(props) {
        super(props);
        this.state = {
            price: null,
        }
    }

    updatePrice = (e) => {
        this.setState({
            price: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.context.setPrice(this.state.price);
    }

    render() {
        return (
            <div className="purchase">
                <h3>
                    Enter your purchase information below:
                </h3>
                <form onSubmit={this.handleSubmit}>
                    <section>
                        <section>
                            <label htmlFor="purchase-price">Purchase Price ($): </label>
                            <span data-tip="Enter your proposed purchase price.">{InfoCircle}</span>
                            <ReactTooltip />
                            <input type="number" name="purchase-price" min="0" onChange={this.updatePrice}/>
                        </section>
                        <section>
                            <label htmlFor="down-payment">Loan Down Payment (%): </label>
                            <span data-tip="Enter a whole number. If 20%, enter 20, not 0.20.">{InfoCircle}</span>
                            <ReactTooltip />
                            <input type="number" name="down-payment" min="0"/>
                        </section>
                        <section>
                            <label htmlFor="interest-rate">Loan Interest Rate (%): </label>
                            <span data-tip="Enter a whole number. If 4%, enter 4, not 0.04.">{InfoCircle}</span>
                            <ReactTooltip />
                            <input type="number" name="interest-rate" min="0"/>
                        </section>
                        <section>
                            <label htmlFor="loan-period">Loan Period (months): </label>
                            <span data-tip="Enter the number of months until loan is paid off.">{InfoCircle}</span>
                            <ReactTooltip />
                            <input type="number" name="loan-period" min="0" placeholder="360 months is a good starting point."/>
                        </section>
                    </section>
                    <Link to="/income">
                        <input className="submit-button" type="submit" value="Next" />
                    </Link>
                </form>
            </div>
        );
    }
}

export default Purchase;