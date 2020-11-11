import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Report.css'
import SoundlyInvestContext from '../../contexts/SoundlyInvestContext';
import { DownPaymentAmount, MonthlyLoanPayment, TotalIncome, TaxAmount, VacancyAmount, TotalExpenses, GRM, MonthlyNOI, YearlyNOI, CashFlow, CapRate } from '../../utils/Calculations';

class Report extends Component {
    static contextType = SoundlyInvestContext;

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
                            <td>Address</td>
                            <td>{this.context.propAddress ? this.context.propAddress : 'Not provided'}</td>
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
                            <td>${this.context.purchasePrice ? this.context.purchasePrice : 'Not provided'}</td>
                        </tr>
                        <tr>
                            <td>Down Payment</td>
                            <td>${this.context.downPayment ? <DownPaymentAmount /> : 'Not provided'}</td>
                        </tr>
                        <tr>
                            <td>Interest Rate</td>
                            <td>{this.context.interestRate ? this.context.interestRate : 'Not provided'}%</td>
                        </tr>
                        <tr>
                            <td>Loan Period</td>
                            <td>{this.context.loanPeriod ? this.context.loanPeriod + ' years': 'Not provided'}</td>
                        </tr>
                        <tr>
                            <td>Monthly Payment</td>
                            <td>${this.context.loanPeriod && this.context.interestRate && this.context.downPayment && this.context.purchasePrice ? <MonthlyLoanPayment /> : 'Cannot calculate'}</td>
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
                            <td>${this.context.rentalIncome ? this.context.rentalIncome : 'Not provided'}</td>
                        </tr>
                        <tr>
                            <td>Storage Income</td>
                            <td>${this.context.storageIncome ? this.context.storageIncome : 'Not provided'}</td>
                        </tr>
                        <tr>
                            <td>Parking Income</td>
                            <td>${this.context.parkingIncome ? this.context.parkingIncome : 'Not provided'}</td>
                        </tr>
                        <tr>
                            <td>Total Income</td>
                            <td>${this.context.rentalIncome && this.context.storageIncome && this.context.parkingIncome ? <TotalIncome /> : 'Cannot calculate'}</td>
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
                            <td>${this.context.purchasePrice && this.context.taxRate ? <TaxAmount /> : 'Cannot calculate'}</td>
                        </tr>
                        <tr>
                            <td>Property Manager</td>
                            <td>${this.context.propertyManager ? this.context.propertyManager : 'Not provided'}</td>
                        </tr>
                        <tr>
                            <td>Insurance</td>
                            <td>${this.context.insurance ? this.context.insurance : 'Not provided'}</td>
                        </tr>
                        <tr>
                            <td>Utilities</td>
                            <td>${this.context.utilities ? this.context.utilities : 'Not provided'}</td>
                        </tr>
                        <tr>
                            <td>Gardener</td>
                            <td>${this.context.gardener ? this.context.gardener : 'Not provided'}</td>
                        </tr>
                        <tr>
                            <td>Maintenance</td>
                            <td>${this.context.maintenance ? this.context.maintenance : 'Not provided'}</td>
                        </tr>
                        <tr>
                            <td>Vacancy ({this.context.vacancyRate}%)</td>
                            <td>${this.context.vacancyRate ? <VacancyAmount /> : 'Cannot calculate'}</td>
                        </tr>
                        <tr>
                            <td>Total Expenses</td>
                            <td>$<TotalExpenses /></td>
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
                            <td><GRM /></td>
                        </tr>
                        <tr>
                            <td>Cap Rate</td>
                            <td><CapRate />%</td>
                        </tr>
                        <tr>
                            <td>Monthly Net Operating Income</td>
                            <td>$<MonthlyNOI /></td>
                        </tr>
                        <tr>
                            <td>Yearly Net Operating Income</td>
                            <td>$<YearlyNOI /></td>
                        </tr>
                        <tr>
                            <td>Monthly Cash Flow</td>
                            <td>$<CashFlow /></td>
                        </tr>
                    </tbody>
                </table>
                <section className="report-buttons">
                    <button>Print to PDF</button>
                    <Link to="/">
                        <button>Start new report</button>
                    </Link>
                </section>
            </div>
        );
    }
}

export default Report;