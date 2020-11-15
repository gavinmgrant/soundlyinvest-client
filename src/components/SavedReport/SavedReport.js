import React, { Component } from 'react';
import Report from '../Report/Report';
import { withRouter } from 'react-router-dom';
import config from '../../config';
import SoundlyInvestContext from '../../contexts/SoundlyInvestContext';

class SavedReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
    };

    static contextType = SoundlyInvestContext;

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/reports/${this.context.reportId}`, {
            method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then(data => {
                this.context.setAddress(data.prop_address);
                this.context.setPrice(data.purchase_price);
                this.context.setDownPayment(data.down_payment);
                this.context.setInterestRate(data.interest_rate);
                this.context.setLoanPeriod(data.loan_period);
                this.context.setRentalIncome(data.rental_income);
                this.context.setStorageIncome(data.storage_income);
                this.context.setParkingIncome(data.parking_income);
                this.context.setTaxRate(data.tax_rate);
                this.context.setPropertyManager(data.property_manager);
                this.context.setInsurance(data.insurance);
                this.context.setUtilities(data.utilities);
                this.context.setGardener(data.gardener);
                this.context.setMiscellaneous(data.miscellaneous);
                this.context.setVacancyRate(data.vacancy_rate);
            })
            .catch(error => {
                this.setState({
                    error: 'Cannot get report at this time.'
                });
            })
    }

    render() {
        return (
            <div className="saved-report">
                <Report />
            </div>
        )
    }
}

export default withRouter(SavedReport);