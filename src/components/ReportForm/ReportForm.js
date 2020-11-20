import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import config from '../../config';
import './ReportForm.css'
import SoundlyInvestContext from '../../contexts/SoundlyInvestContext';
import TokenService from '../../services/token-service';

class ReportForm extends Component {
    static contextType = SoundlyInvestContext;

    constructor(props) {
        super(props);
        this.state = {
            report_name: '',
            date_created: '',
            user_id: ''
        }
    }

    updateName = name => {
        this.setState({
            report_name: name
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { report_name } = e.target
        let date = new Date().toLocaleString();
        const newReport = {
            report_name: report_name.value,
            date_created: date,
            prop_address: this.context.propAddress,
            purchase_price: this.context.purchasePrice,
            down_payment: this.context.downPayment,
            interest_rate: this.context.interestRate,
            loan_period: this.context.loanPeriod,
            rental_income: this.context.rentalIncome,
            storage_income: this.context.storageIncome,
            parking_income: this.context.parkingIncome,
            tax_rate: this.context.taxRate,
            property_manager: this.context.propertyManager,
            insurance: this.context.insurance,
            utilities: this.context.utilities,
            gardener: this.context.gardener,
            miscellaneous: this.context.miscellaneous,
            vacancy_rate: this.context.vacancyRate,
            user_id: 1
        }
        fetch(`${config.API_ENDPOINT}/reports`, {
            method: 'POST',
            body: JSON.stringify(newReport),
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            }
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(error => {
                    throw error
                })
            }
            return res.json()
        })
        .then(data => {
            this.context.addReport({
                ...data,
                report_name: report_name.value,
                date_created: date,
                prop_address: this.context.propAddress,
                purchase_price: this.context.purchasePrice,
                down_payment: this.context.downPayment,
                interest_rate: this.context.interestRate,
                loan_period: this.context.loanPeriod,
                rental_income: this.context.rentalIncome,
                storage_income: this.context.storageIncome,
                parking_income: this.context.parkingIncome,
                tax_rate: this.context.taxRate,
                property_manager: this.context.propertyManager,
                insurance: this.context.insurance,
                utilities: this.context.utilities,
                gardener: this.context.gardener,
                miscellaneous: this.context.miscellaneous,
                vacancy_rate: this.context.vacancyRate,
                user_id: 1
            })
        })
        .catch(error => {
            console.error({ error });
        })
        this.props.history.push('/reports');
    }

    render() {
        return (
            <div className="report-form">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="report-name">Save this report:</label>
                    <input 
                        type="text"
                        name="report_name"
                        placeholder="Enter report name."
                        onChange={e => this.updateName(e.target.value)} 
                        required
                    />
                    <input 
                        type="submit" 
                        value="Save"
                    />
                </form>
            </div>
        );
    }
}

export default withRouter(ReportForm);