import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Report.css'

class Report extends Component {
  render() {
    return (
        <div className="report">
            <table className="report-table">
                <thead>
                    <tr>
                        <th colspan="2" class="report-title">Investment Property Report</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Maximum Purchase Price</td>
                        <td>$1,500,000</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th colspan="2">Property</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Address</td>
                        <td>123 Main Street, Los Angeles, CA 90001</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th colspan="2">Monthly Income</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Unit 1</td>
                        <td>$2,500</td>
                    </tr>
                    <tr>
                        <td>Unit 2</td>
                        <td>$3,500</td>
                    </tr>
                    <tr>
                        <td>Unit 3</td>
                        <td>$3,500</td>
                    </tr>
                    <tr>
                        <td>Unit 4</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Storage</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Parking</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Total Income</td>
                        <td>$9,500</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th colspan="2">Monthly Expenses</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Property Taxes</td>
                        <td>$1,771 (1.25%)</td>
                    </tr>
                    <tr>
                        <td>Property Manager</td>
                        <td>$665 (7%)</td>
                    </tr>
                    <tr>
                        <td>Insurance</td>
                        <td>$129</td>
                    </tr>
                    <tr>
                        <td>Water & Sewer</td>
                        <td>$150</td>
                    </tr>
                    <tr>
                        <td>Gardener</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>Maintenance</td>
                        <td>$708 (0.5%)</td>
                    </tr>
                    <tr>
                        <td>Vacancy</td>
                        <td>$190 (2%)</td>
                    </tr>
                    <tr>
                        <td>Total Expenses</td>
                        <td>$3,422</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th colspan="2">Loan Terms</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Down Payment</td>
                        <td>$300,000 (20%)</td>
                    </tr>
                    <tr>
                        <td>Interest Rate</td>
                        <td>4%</td>
                    </tr>
                    <tr>
                        <td>Loan Period</td>
                        <td>360 months</td>
                    </tr>
                    <tr>
                        <td>Monthly Payment</td>
                        <td>$5,729</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th colspan="2">Investment Analytics</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Gross Rent Multiplier</td>
                        <td>13</td>
                    </tr>
                    <tr>
                        <td>Cap Rate</td>
                        <td>5%</td>
                    </tr>
                    <tr>
                        <td>Monthly Net Operating Income</td>
                        <td>$6,078</td>
                    </tr>
                    <tr>
                        <td>Yearly Net Operating Income</td>
                        <td>$72,940</td>
                    </tr>
                    <tr>
                        <td>Monthly Cash Flow</td>
                        <td>$349</td>
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