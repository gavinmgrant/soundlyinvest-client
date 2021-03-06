import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import { InfoCircle } from '../../utils/Icons';
import SoundlyInvestContext from '../../contexts/SoundlyInvestContext';
import './Purchase.css';

class Purchase extends Component {
    static contextType = SoundlyInvestContext;

    constructor(props) {
        super(props);
        this.state = {
            purchasePrice: '',
            downPayment: '',
            interestRate: '',
            loanPeriod: '30',
        }
    }

    componentDidMount() {
        this.context.setPagePurchase(true);
    }

    componentWillUnmount() {
        this.context.setPagePurchase(false);
    }

    updatePrice = (e) => {
        this.setState({
            purchasePrice: e.target.value
        })
    };

    updateDownPayment = (e) => {
        this.setState({
            downPayment: e.target.value
        })
    };

    updateInterestRate = (e) => {
        this.setState({
            interestRate: e.target.value
        })
    };

    updateLoanPeriod = (e) => {
        this.setState({
            loanPeriod: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.context.setPrice(this.state.purchasePrice);
        this.context.setDownPayment(this.state.downPayment);
        this.context.setInterestRate(this.state.interestRate);
        this.context.setLoanPeriod(this.state.loanPeriod);
        this.props.history.push('/income');
    }

    render() {
        return (
            <div className="purchase">
                <h3>
                    Enter your purchase information below:
                </h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="purchase-price">Purchase Price ($): <span data-tip="Enter your proposed purchase price.">{InfoCircle}</span>
                        <ReactTooltip />
                    </label>
                    <input 
                        type="number" 
                        name="purchase-price" 
                        min="0" 
                        onChange={this.updatePrice} 
                        value={this.state.purchasePrice}
                        placeholder="Enter purchase price."
                        required
                    />
                    <label htmlFor="down-payment">Loan Down Payment (%): <span data-tip="Enter a whole number. If 20%, enter 20, not 0.20.">{InfoCircle}</span>
                        <ReactTooltip />
                    </label>
                    <input 
                        type="number" 
                        name="down-payment" 
                        min="0"
                        max="100"
                        onChange={this.updateDownPayment}
                        value={this.state.downPayment}
                        placeholder="Enter down payment percentage."
                        required
                    />
                    <label htmlFor="interest-rate">Loan Interest Rate (%): <span data-tip="Enter a whole number. If 4%, enter 4, not 0.04.">{InfoCircle}</span>
                        <ReactTooltip />
                    </label>
                    <input 
                        type="number" 
                        name="interest-rate" 
                        min="0"
                        max="20"
                        step=".01"
                        onChange={this.updateInterestRate}
                        value={this.state.interestRate}
                        placeholder="Enter rate percentage."
                        required
                    />
                    <label htmlFor="loan-period">Loan Period (years): <span data-tip="Select the number of years until loan is paid off.">{InfoCircle}</span>
                        <ReactTooltip />
                    </label>
                    <select
                        value={this.state.loanPeriod}
                        onChange={this.updateLoanPeriod}
                    >
                        <option value="30">30 years</option>
                        <option value="20">20 years</option>
                        <option value="15">15 years</option>
                        <option value="10">10 years</option>
                    </select>
                    <input 
                        className="submit-button" 
                        type="submit" 
                        value="Next" 
                    />
                </form>
            </div>
        );
    }
}

export default withRouter(Purchase);