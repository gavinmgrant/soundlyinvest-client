import React, { Component } from 'react';
import Report from '../Report/Report';
import { withRouter } from 'react-router-dom';
import config from '../../config';
import SoundlyInvestContext from '../../contexts/SoundlyInvestContext';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import IdleService from '../../services/idle-service';

class SavedReport extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
    };

    static contextType = SoundlyInvestContext;

    componentDidMount() {
        this._isMounted = true;

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
                if (this._isMounted) {
                    this.setState({
                        error: 'Cannot get report at this time.'
                    });
                }
            })
        IdleService.setIdleCallback(this.logoutFromIdle)

        if (TokenService.hasAuthToken()) {
            IdleService.regiserIdleTimerResets()
            TokenService.queueCallbackBeforeExpiry(() => {
            AuthApiService.postRefreshToken()
            })
        }
    }

    componentWillUnmount() {
        // cancel all subscriptions and asynchronous tasks when unmounted
        this._isMounted = false;
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