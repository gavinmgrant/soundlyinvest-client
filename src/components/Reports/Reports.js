import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import config from '../../config';
import './Reports.css';

class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: [],
            error: null
        }
    };

    componentDidMount() {
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
                this.handleReports(data)
            })
            .catch(error => {
                this.setState({
                    error: 'Cannot get reports at this time.'
                });
            }) 
    }

    handleReports = rpts => {
        this.setState({
            reports: rpts
        })
    };

    render() {
        return (
            <div className="reports-list">
                <h1 className="reports-list-title">Saved Reports</h1>
                <p>{this.error}</p>
                <ul>
                    {this.state.reports.map(report =>
                        <li
                            key={report.id}
                            className="report-item"
                        >
                            <p>Name: {report.report_name}</p>
                            <p>Created on: {report.date_created.slice(0, 10)}</p>
                            <p>{report.prop_address}</p>
                            <p>{report.purchase_price}</p>
                            <Link to={`/reports/${report.id}`}>Go to details</Link>
                        </li>)}
                </ul>
            </div>
        )
    }
}

export default withRouter(Reports);