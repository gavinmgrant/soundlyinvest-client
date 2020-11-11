import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import { InfoCircle } from '../../utils/Icons';
import SoundlyInvestContext from '../../contexts/SoundlyInvestContext';
import './Income.css';

class Income extends Component {
    static contextType = SoundlyInvestContext;
    
    constructor(props) {
        super(props);
        this.state = {
            rentalIncome: 0,
            storageIncome: 0,
            parkingIncome: 0,
        }
    }

    updateRental = (e) => {
        this.setState({
            rentalIncome: e.target.value
        })
    };

    updateStorage = (e) => {
        this.setState({
            storageIncome: e.target.value
        })
    };

    updateParking = (e) => {
        this.setState({
            parkingIncome: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.context.setRentalIncome(this.state.rentalIncome);
        this.context.setStorageIncome(this.state.storageIncome);
        this.context.setParkingIncome(this.state.parkingIncome);
        this.props.history.push('/expenses');
    }

    render() {
        return (
            <div className="income">
                <h3>
                    Enter projected monthly income below:
                </h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="rental">Rental Income ($): <span data-tip="If multifamily, enter total rent for all units.">{InfoCircle}</span>
                        <ReactTooltip />
                    </label>
                    <input 
                        type="number" 
                        name="rental-income" 
                        min="0"
                        onChange={this.updateRental}
                        placeholder={this.context.rentalIncome ? this.context.rentalIncome : "Enter the total amount of rent."}
                    />
                    <label htmlFor="storage">Storage Income ($): <span data-tip="If renting storage space, enter total amount here.">{InfoCircle}</span>
                        <ReactTooltip />
                    </label>
                    <input 
                        type="number"
                        name="storage-income"
                        min="0"
                        onChange={this.updateStorage}
                        placeholder={this.context.storageIncome ? this.context.storageIncome : "Enter any rent for storage space."}
                    />
                    <label htmlFor="parking">Parking Income ($): <span data-tip="If renting parking space(s), enter total amount here.">{InfoCircle}</span>
                        <ReactTooltip />
                    </label>
                    <input 
                        type="number"
                        name="parking-income"
                        min="0"
                        onChange={this.updateParking}
                        placeholder={this.context.parkingIncome ? this.context.parkingIncome : "Enter any rent for parking."}
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

export default withRouter(Income);