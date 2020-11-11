import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import { InfoCircle } from '../../utils/Icons';
import SoundlyInvestContext from '../../contexts/SoundlyInvestContext';
import './Expenses.css';

class Expenses extends Component {
    static contextType = SoundlyInvestContext;

    constructor(props) {
        super(props);
        this.state = {
            taxRate: 0,
            propertyManager: 0,
            insurance: 0,
            utilities: 0,
            gardener: 0,
            maintenance: 0,
            vacancyRate: 0,
        }
    }

    updateTaxRate = (e) => {
        this.setState({
            taxRate: e.target.value
        })
    };

    updatePropertyManager = (e) => {
        this.setState({
            propertyManager: e.target.value
        })
    };

    updateInsurance = (e) => {
        this.setState({
            insurance: e.target.value
        })
    };

    updateUtilities = (e) => {
        this.setState({
            utilities: e.target.value
        })
    };

    updateGardener = (e) => {
        this.setState({
            gardener: e.target.value
        })
    };

    updateMaintenance = (e) => {
        this.setState({
            maintenance: e.target.value
        })
    };

    updateVacancyRate = (e) => {
        this.setState({
            vacancyRate: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.context.setTaxRate(this.state.taxRate);
        this.context.setPropertyManager(this.state.propertyManager);
        this.context.setInsurance(this.state.insurance);
        this.context.setUtilities(this.state.utilities);
        this.context.setGardener(this.state.gardener);
        this.context.setMaintenance(this.state.maintenance);
        this.context.setVacancyRate(this.state.vacancyRate);
        this.props.history.push('/report');
    }

    render() {
        return (
            <div className="expenses">
                <h3>
                    Enter projected monthly expenses below:
                </h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="property-tax-rate">Property Tax Rate (%): <span data-tip="Enter a whole number. If 1%, enter 1, not 0.01.">{InfoCircle}</span>
                        <ReactTooltip />
                    </label>
                    <input 
                        type="number" 
                        name="property-tax-rate" 
                        min="0"
                        step=".01"
                        onChange={this.updateTaxRate}
                        placeholder={this.context.taxRate ? this.context.taxRate : "Enter your tax rate percentage."}
                    />
                    <label htmlFor="property-manager">Property Manager ($): <span data-tip="If you have a property manager, enter monthly fee here.">{InfoCircle}</span>
                        <ReactTooltip />
                    </label>
                    <input 
                        type="number" 
                        name="property-manager" 
                        min="0"
                        onChange={this.updatePropertyManager}
                        placeholder={this.context.propertyManager ? this.context.propertyManager : "Enter fee for management."}
                    />
                    <label htmlFor="insurance">Insurance ($): <span data-tip="Enter total cost for insurance such as hazard and umbrella.">{InfoCircle}</span>
                        <ReactTooltip />
                    </label>
                    <input 
                        type="number" 
                        name="insurance" 
                        min="0"
                        onChange={this.updateInsurance}
                        placeholder={this.context.insurance ? this.context.insurance : "Enter insurance cost."}
                    />
                    <label htmlFor="utilities">Utilities ($): <span data-tip="Enter all utility expenses paid by the landlord.">{InfoCircle}</span>
                        <ReactTooltip />
                    </label>
                    <input 
                        type="number" 
                        name="utilities" 
                        min="0"
                        onChange={this.updateUtilities}
                        placeholder={this.context.utilities ? this.context.utilities : "Enter total utilities cost."}
                    />
                    <label htmlFor="gardener">Gardener ($): <span data-tip="Enter amount reserved for managing the landscape.">{InfoCircle}</span>
                        <ReactTooltip />
                    </label>
                    <input 
                        type="number" 
                        name="gardener" 
                        min="0"
                        onChange={this.updateGardener}
                        placeholder={this.context.gardener ? this.context.gardener : "Enter gardener cost."}
                    />
                    <label htmlFor="maintenance">Maintenance ($): <span data-tip="Enter miscellaneous maintenance expenses here.">{InfoCircle}</span>
                        <ReactTooltip /> 
                    </label>
                    <input 
                        type="number" 
                        name="maintenance" 
                        min="0"
                        onChange={this.updateMaintenance}
                        placeholder={this.context.maintenance ? this.context.maintenance : "Enter reserves for maintenance."}
                    />
                    <label htmlFor="vacancy-rate">Vacancy Rate (%): <span data-tip="Enter a whole number. This is a percentage of monthly income.">{InfoCircle}</span>
                        <ReactTooltip />
                    </label>
                    <input 
                        type="number" 
                        name="vacancy-rate" 
                        min="0" 
                        onChange={this.updateVacancyRate}
                        placeholder={this.context.vacancyRate ? this.context.vacancyRate :"2% is a good starting point."}
                    />
                    <input 
                        className="submit-button" 
                        type="submit" 
                        value="Finish" 
                    />
                </form>
            </div>
        );
    }
}

export default withRouter(Expenses);