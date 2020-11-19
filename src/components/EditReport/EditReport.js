import React, { Component } from 'react';
import config from '../../config';
import SoundlyInvestContext from '../../contexts/SoundlyInvestContext';
import TokenService from '../../services/token-service';
import './EditReport.css'

class EditReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: false,
            disabled: true,
            id: 0,
            report_name: '',
            prop_address: '',
            purchase_price: '',
            down_payment: '',
            interest_rate: '',
            loan_period: '',
            rental_income: '',
            storage_income: '',
            parking_income: '',
            tax_rate: '',
            property_manager: '',
            insurance: '',
            utilities: '',
            gardener: '',
            miscellaneous: '',
            vacancy_rate: '',
        }
    }
    static contextType = SoundlyInvestContext;

    componentDidMount() {
        this.setState({ 
            isLoading: true 
        });
        fetch(`${config.API_ENDPOINT}/reports/${this.context.reportId}`, {
            method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${TokenService.getAuthToken()}`,
                }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then(data => { 
                this.setState({
                    id: data.id,
                    report_name: data.report_name,
                    prop_address: data.prop_address,
                    purchase_price: data.purchase_price,
                    down_payment: data.down_payment,
                    interest_rate: data.interest_rate,
                    loan_period: data.loan_period,
                    rental_income: data.rental_income,
                    storage_income: data.storage_income,
                    parking_income: data.parking_income,
                    tax_rate: data.tax_rate,
                    property_manager: data.property_manager,
                    insurance: data.insurance,
                    utilities: data.utilities,
                    gardener: data.gardener,
                    miscellaneous: data.miscellaneous,
                    vacancy_rate: data.vacancy_rate,
                })
                this.setState({
                    isLoading: false
                });
            })
            .catch(error => {
                console.error({ error })
            })
    }

    handleChangeName = e => {
        this.setState({ report_name: e.target.value, disabled: false })
    };

    handleChangeAddress = e => {
        this.setState({ prop_address: e.target.value, disabled: false })
    };

    handleChangePrice = e => {
        this.setState({ purchase_price: e.target.value, disabled: false })
    };

    handleChangeDownPayment = e => {
        this.setState({ down_payment: e.target.value, disabled: false })
    };

    handleChangeInterestRate = e => {
        this.setState({ interest_rate: e.target.value, disabled: false })
    };

    handleChangeLoanPeriod = e => {
        this.setState({ loan_period: e.target.value, disabled: false })
    };

    handleChangeRentalIncome = e => {
        this.setState({ rental_income: e.target.value, disabled: false })
    };

    handleChangeStorageIncome = e => {
        this.setState({ storage_income: e.target.value, disabled: false })
    };

    handleChangeParkingIncome = e => {
        this.setState({ parking_income: e.target.value, disabled: false })
    };

    handleChangeTaxRate = e => {
        this.setState({ tax_rate: e.target.value, disabled: false })
    };

    handleChangePropertyManager = e => {
        this.setState({ property_manager: e.target.value, disabled: false })
    };

    handleChangeInsurance = e => {
        this.setState({ insurance: e.target.value, disabled: false })
    };

    handleChangeUtilities = e => {
        this.setState({ utilities: e.target.value, disabled: false })
    };

    handleChangeGardener = e => {
        this.setState({ gardener: e.target.value, disabled: false })
    };

    handleChangeMiscellaneous = e => {
        this.setState({ miscellaneous: e.target.value, disabled: false })
    };

    handleChangeVacancyRate = e => {
        this.setState({ vacancy_rate: e.target.value, disabled: false})
    };

    handleSubmit = e => {
        e.preventDefault();
        const {
            report_name,
            prop_address,
            purchase_price,
            down_payment,
            interest_rate,
            loan_period,
            rental_income,
            storage_income,
            parking_income,
            tax_rate,
            property_manager,
            insurance,
            utilities,
            gardener,
            miscellaneous,
            vacancy_rate
        } = this.state;
        const newReport = {
            report_name: report_name,
            prop_address: prop_address,
            purchase_price: purchase_price,
            down_payment: down_payment,
            interest_rate: interest_rate,
            loan_period: loan_period,
            rental_income: rental_income,
            storage_income: storage_income,
            parking_income: parking_income,
            tax_rate: tax_rate,
            property_manager: property_manager,
            insurance: insurance,
            utilities: utilities,
            gardener: gardener,
            miscellaneous: miscellaneous,
            vacancy_rate: vacancy_rate
        }

        fetch(`${config.API_ENDPOINT}/reports/${this.context.reportId}`, {
            method: 'PATCH',
            body: JSON.stringify(newReport),
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,  
            }
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(error => Promise.reject(error));
            })
            .then(() => {
                this.resetFields(newReport);
                this.context.updateReport(newReport);
                this.props.history.push(`/reports/${this.context.reportId}`)
            })
            .catch(error => {
                console.error(error)
                this.setState({ error })
            })
    }

    resetFields = (newFields) => {
        this.setState({
            report_name: newFields.report_name || '',
            prop_address: newFields.prop_address || '',
            purchase_price: newFields.purchase_price || 0,
            down_payment: newFields.down_payment || 0,
            interest_rate: newFields.interest_rate || 0,
            loan_period: newFields.loan_period || 0,
            rental_income: newFields.rental_income || 0,
            storage_income: newFields.storage_income || 0,
            parking_income: newFields.parking_income || 0,
            tax_rate: newFields.tax_rate || 0,
            property_manager: newFields.property_manager || 0,
            insurance: newFields.insurance || 0,
            utilities: newFields.utilities || 0,
            gardener: newFields.gardener || 0,
            miscellaneous: newFields.miscellaneous || 0,
            vacancy_rate: newFields.vacancy_rate || 0,
        })
    };

    handleClickCancel = () => {
        this.props.history.push('/reports')
    };

    render() {
        const { 
            error, 
            report_name, 
            purchase_price, 
            down_payment, 
            interest_rate, 
            loan_period, 
            rental_income,
            storage_income,
            parking_income,
            tax_rate,
            property_manager,
            insurance,
            utilities,
            gardener,
            miscellaneous,
            vacancy_rate
        } = this.state;
        return (
            <form className="edit-report" onSubmit={this.handleSubmit}>
                <h1 className="edit-report-title">
                    Edit Report
                </h1>
                <div className="edit-report-error" role="alert">
                    {error && <p>{error.message}</p>}
                </div>  
                <label htmlFor="report-name">Report Name:</label>
                <input
                    type="text"
                    className="edit-report-input"
                    name="report-name"
                    value={report_name}
                    onChange={this.handleChangeName}
                />
                <h2 className="edit-headings">Purchase Information</h2>
                <label htmlFor="purchase-price">Purchase Price ($):</label>
                <input
                    type="number"
                    className="edit-report-input"
                    name="purchase-price"
                    min="0"
                    value={purchase_price}
                    onChange={this.handleChangePrice}
                />      
                <label htmlFor="down-payment">Down Payment (%):</label>
                <input
                    type="number"
                    className="edit-report-input"
                    name="down-payment"
                    min="0"
                    max="100"
                    value={down_payment}
                    onChange={this.handleChangeDownPayment}
                />        
                <label htmlFor="interest-rate">Interest Rate (%):</label>
                <input
                    type="number"
                    className="edit-report-input"
                    name="interest-rate"
                    min="0"
                    max="20"
                    step=".01"
                    value={interest_rate}
                    onChange={this.handleChangeInterestRate}
                />       
                <label htmlFor="loan-period">Loan Period (years):</label>
                <select
                    value={loan_period}
                    onChange={this.handleChangeLoanPeriod}
                >
                    <option value="30">30 years</option>
                    <option value="20">20 years</option>
                    <option value="15">15 years</option>
                    <option value="10">10 years</option>
                </select> 
                <h2 className="edit-headings">Monthly Income</h2>  
                <label htmlFor="rental-income">Rental Income ($):</label>
                <input
                    type="number"
                    className="edit-report-input"
                    name="rental-income"
                    value={rental_income}
                    onChange={this.handleChangeRentalIncome}
                />     
                <label htmlFor="storage-income">Storage Income ($):</label>
                <input
                    type="number"
                    className="edit-report-input"
                    name="storage-income"
                    value={storage_income}
                    onChange={this.handleChangeStorageIncome}
                />          
                <label htmlFor="parking-income">Parking Income ($):</label>
                <input
                    type="number"
                    className="edit-report-input"
                    name="parking-income"
                    value={parking_income}
                    onChange={this.handleChangeParkingIncome}
                /> 
                <h2 className="edit-headings">Monthly Expenses</h2>        
                <label htmlFor="tax-rate">Tax Rate (%):</label>
                <input
                    type="number"
                    className="edit-report-input"
                    name="tax-rate"
                    min="0"
                    step=".01"
                    max="100"
                    value={tax_rate}
                    onChange={this.handleChangeTaxRate}
                />          
                <label htmlFor="property-manager">Property Manager ($):</label>
                <input
                    type="number"
                    className="edit-report-input"
                    name="property-manager"
                    min="0"
                    value={property_manager}
                    onChange={this.handleChangePropertyManager}
                />         
                <label htmlFor="insurance">Insurance ($):</label>
                <input
                    type="number"
                    className="edit-report-input"
                    name="insurance"
                    min="0"
                    value={insurance}
                    onChange={this.handleChangeInsurance}
                />        
                <label htmlFor="utilities">Utilities ($):</label>
                <input
                    type="number"
                    className="edit-report-input"
                    name="utilities"
                    min="0"
                    value={utilities}
                    onChange={this.handleChangeUtilities}
                />          
                <label htmlFor="gardener">Gardener ($):</label>
                <input
                    type="number"
                    className="edit-report-input"
                    name="gardener"
                    min="0"
                    value={gardener}
                    onChange={this.handleChangeGardener}
                />        
                <label htmlFor="miscellaneous">Miscellaneous ($):</label>
                <input
                    type="number"
                    className="edit-report-input"
                    name="miscellaneous"
                    min="0"
                    value={miscellaneous}
                    onChange={this.handleChangeMiscellaneous}
                />
                <label htmlFor="vacancy-rate">Vacancy Rate (%):</label>
                <input
                    type="number"
                    className="edit-report-input"
                    name="vacancy-rate"
                    min="0" 
                    max="100"
                    value={vacancy_rate}
                    onChange={this.handleChangeVacancyRate}
                />
                <div className="edit-buttons">
                    <input 
                        className="submit-button"
                        type="submit"
                        value="Save"
                        disabled={this.state.disabled ? true : false}
                    />
                    <button
                        className="submit-button"
                        type="button"
                        onClick={this.handleClickCancel}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        )
    }
}

export default EditReport;