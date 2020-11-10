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
        // need a way to avoid resetting context when value remains unchanged and submit button hit
        this.context.setPrice(this.state.price);
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
                        placeholder={this.context.purchasePrice ? this.context.purchasePrice : "Enter your price."}
                    />
                    <label htmlFor="down-payment">Loan Down Payment (%): <span data-tip="Enter a whole number. If 20%, enter 20, not 0.20.">{InfoCircle}</span>
                        <ReactTooltip />
                    </label>
                    <input 
                        type="number" 
                        name="down-payment" 
                        min="0"
                    />
                    <label htmlFor="interest-rate">Loan Interest Rate (%): <span data-tip="Enter a whole number. If 4%, enter 4, not 0.04.">{InfoCircle}</span>
                        <ReactTooltip />
                    </label>
                    <input 
                        type="number" 
                        name="interest-rate" 
                        min="0"
                    />
                    <label htmlFor="loan-period">Loan Period (months): <span data-tip="Enter the number of months until loan is paid off.">{InfoCircle}</span>
                        <ReactTooltip />
                    </label>
                    <input 
                        type="number" 
                        name="loan-period" 
                        min="0" 
                        placeholder="360 months is a good starting point."
                    />
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