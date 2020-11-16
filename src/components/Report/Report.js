import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import config from '../../config';
import ReportForm from '../ReportForm/ReportForm'
import './Report.css'
import SoundlyInvestContext from '../../contexts/SoundlyInvestContext';
import { DownPaymentAmount, MonthlyLoanPayment, TotalIncome, TaxAmount, VacancyAmount, TotalExpenses, GRM, MonthlyNOI, YearlyNOI, CashFlow, CapRate } from '../../utils/Calculations';

class Report extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteReport = this.handleDeleteReport.bind(this);
        this.state = {
            error: null,
        }
    };

    static contextType = SoundlyInvestContext;

    componentDidMount() {
        this.context.setPageReport(true);
        /*if (!this.context.reportId) {
            this.props.history.push('/reports');
        }*/
    }

    componentWillUnmount() {
        this.context.setPageReport(false);
    }

    // deletes selected report from the database
    handleDeleteReport(e) {
        e.preventDefault();

        fetch(`${config.API_ENDPOINT}/reports/${this.context.reportId}`, {
            method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Could not delete report number ${this.context.reportId}`)
                }
                return;
            })
            .then(data => { 
                this.context.deleteReport(this.context.reportId);
                this.props.history.push('/reports');
            })
            .catch(error => {
                console.error({ error })
            })
    }

    render() {
        return (
            <div className="report">
                <table className="report-table">
                    <thead>
                        <tr>
                            <th colSpan="2" className="report-title">Investment Property Report</th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th colSpan="2">Subject Property</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th colSpan="2">{this.context.propAddress ? this.context.propAddress : <Link to="/">No address provided. Start new report.</Link>}</th>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan="2">Purchase Information</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Purchase Price</td>
                            <td>$ {this.context.purchasePrice}</td>
                        </tr>
                        <tr>
                            <td>Down Payment ({this.context.downPayment}%)</td>
                            <td>$ <DownPaymentAmount /></td>
                        </tr>
                        <tr>
                            <td>Interest Rate</td>
                            <td>{this.context.interestRate} %</td>
                        </tr>
                        <tr>
                            <td>Loan Period</td>
                            <td>{this.context.loanPeriod} years</td>
                        </tr>
                        <tr>
                            <td>Monthly Payment</td>
                            <td>$ {this.context.loanPeriod && this.context.interestRate && this.context.downPayment && this.context.purchasePrice ? <MonthlyLoanPayment /> : ' Cannot calculate'}</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan="2">Monthly Income</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Rental Income</td>
                            <td>$ {this.context.rentalIncome}</td>
                        </tr>
                        <tr>
                            <td>Storage Income</td>
                            <td>$ {this.context.storageIncome}</td>
                        </tr>
                        <tr>
                            <td>Parking Income</td>
                            <td>$ {this.context.parkingIncome}</td>
                        </tr>
                        <tr>
                            <td>Total Income</td>
                            <td>$ <TotalIncome /></td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan="2">Monthly Expenses</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Property Taxes ({this.context.taxRate}%)</td>
                            <td>$ <TaxAmount /></td>
                        </tr>
                        <tr>
                            <td>Property Manager</td>
                            <td>$ {this.context.propertyManager}</td>
                        </tr>
                        <tr>
                            <td>Insurance</td>
                            <td>$ {this.context.insurance}</td>
                        </tr>
                        <tr>
                            <td>Utilities</td>
                            <td>$ {this.context.utilities}</td>
                        </tr>
                        <tr>
                            <td>Gardener</td>
                            <td>$ {this.context.gardener}</td>
                        </tr>
                        <tr>
                            <td>Miscellaneous</td>
                            <td>$ {this.context.miscellaneous}</td>
                        </tr>
                        <tr>
                            <td>Vacancy ({this.context.vacancyRate}%)</td>
                            <td>$ <VacancyAmount /></td>
                        </tr>
                        <tr>
                            <td>Total Expenses</td>
                            <td>$ <TotalExpenses /></td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan="2">Investment Analytics</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Gross Rent Multiplier</td>
                            <td>{<TotalExpenses /> === 0 && !this.context.purchasePrice ? 'Cannot calculate' : <GRM />}</td>
                        </tr>
                        <tr>
                            <td>Cap Rate</td>
                            <td>{<YearlyNOI /> === 0 && !this.context.purchasePrice ? 'Cannot calculate' : <CapRate />} %</td>
                        </tr>
                        <tr>
                            <td>Monthly Net Operating Income</td>
                            <td>$ <MonthlyNOI /></td>
                        </tr>
                        <tr>
                            <td>Yearly Net Operating Income</td>
                            <td>$ <YearlyNOI /></td>
                        </tr>
                        <tr>
                            <td>Monthly Cash Flow</td>
                            <td>$ {<MonthlyNOI /> === 0 && <MonthlyLoanPayment /> === 0 ? 'Cannot calculate' : <CashFlow />}</td>
                        </tr>
                    </tbody>
                </table>
                {this.context.reportId ? '' : <ReportForm />}
                <section className="report-buttons">
                    <Link to="/">
                        <button className="button-start-new">Start new report</button>
                    </Link>
                    {this.context.reportId ? 
                        <button 
                            disabled={this.isLoading}
                            className="button-delete"
                            onClick={this.handleDeleteReport}
                        >
                            Delete report
                        </button>
                    : '' }
                </section>
            </div>
        );
    }
}

export default withRouter(Report);