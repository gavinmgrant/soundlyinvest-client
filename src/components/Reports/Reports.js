import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import config from '../../config';
import SoundlyInvestContext from '../../contexts/SoundlyInvestContext';
import './Reports.css';

class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: false,
        }
    };

    static contextType = SoundlyInvestContext;

    componentDidMount() {
        this.setState({ 
            isLoading: true 
        });
        fetch(`${config.API_ENDPOINT}/reports`, {
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
                this.context.setReports(data);
                this.setState({
                    isLoading: false
                });
            })
            .catch(error => {
                this.setState({
                    error: 'Cannot get reports at this time.'
                });
            })
    }

    updateId = (id) => {
        this.context.setReportId(id)
    };

    render() {
        return (
            <div className="reports-list">
                <h1 className="reports-list-title">Saved Reports</h1>
                <p>{this.state.isLoading ? 'Loading reports...' : ''}</p>
                <p>{this.error}</p>
                <ul>
                    {!this.state.isLoading ?
                    this.context.reports.map(report =>
                        <li
                            key={report.id}
                            className="report-item"
                        >
                            <h2>{report.report_name}</h2>
                            <p>{report.prop_address}</p>
                            <p>$ {report.purchase_price}</p>
                                <Link 
                                    to={`/reports/${report.id}`}
                                    onClick={() => this.updateId(report.id)}
                                >
                                    View report
                                </Link>
                        </li>)
                    : ''}
                </ul>
            </div>
        )
    }
}

export default withRouter(Reports);