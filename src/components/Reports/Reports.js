import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import config from '../../config';
import SoundlyInvestContext from '../../contexts/SoundlyInvestContext';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import IdleService from '../../services/idle-service';
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

        IdleService.setIdleCallback(this.logoutFromIdle)

        if (TokenService.hasAuthToken()) {
            IdleService.regiserIdleTimerResets()
            TokenService.queueCallbackBeforeExpiry(() => {
            AuthApiService.postRefreshToken()
            })
        }
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
                                    className="view-report"
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