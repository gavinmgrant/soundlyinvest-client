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
            taxRate: '',
            propertyManager: '',
            insurance: '',
            utilities: '',
            gardener: '',
            maintenance: '',
            vacancyRate: '',
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
                        value={this.state.taxRate}
                        placeholder="Enter property tax percentage."
                    />
                    <label htmlFor="property-manager">Property Manager ($): <span data-tip="If you have a property manager, enter monthly fee here.">{InfoCircle}</span>
                        <ReactTooltip />
                    </label>
                    <input 
                        type="number" 
                        name="property-manager" 
                        min="0"
                        onChange={this.updatePropertyManager}
                        value={this.state.propertyManager}
                        placeholder="Enter property manager's monthly fee."
                    />
                    <label htmlFor="insurance">Insurance ($): <span data-tip="Enter total cost for insurance such as hazard and umbrella.">{InfoCircle}</span>
                        <ReactTooltip />
                    </label>
                    <input 
                        type="number" 
                        name="insurance" 
                        min="0"
                        onChange={this.updateInsurance}
                        value={this.state.insurance}
                        placeholder="Enter total insurance costs per month."
                    />
                    <label htmlFor="utilities">Utilities ($): <span data-tip="Enter all utility expenses paid by the landlord.">{InfoCircle}</span>
                        <ReactTooltip />
                    </label>
                    <input 
                        type="number" 
                        name="utilities" 
                        min="0"
                        onChange={this.updateUtilities}
                        value={this.state.utilities}
                        placeholder="Enter total utility cost paid by landlord."
                    />
                    <label htmlFor="gardener">Gardener ($): <span data-tip="Enter amount reserved for managing the landscape.">{InfoCircle}</span>
                        <ReactTooltip />
                    </label>
                    <input 
                        type="number" 
                        name="gardener" 
                        min="0"
                        onChange={this.updateGardener}
                        value={this.state.gardener}
                        placeholder="Enter landscaping fee per month."
                    />
                    <label htmlFor="maintenance">Maintenance ($): <span data-tip="Enter miscellaneous maintenance expenses here.">{InfoCircle}</span>
                        <ReactTooltip /> 
                    </label>
                    <input 
                        type="number" 
                        name="maintenance" 
                        min="0"
                        onChange={this.updateMaintenance}
                        value={this.state.maintenance}
                        placeholder="Enter maintenance/miscellaneous fees."
                    />
                    <label htmlFor="vacancy-rate">Vacancy Rate (%): <span data-tip="Enter a whole number. This is a percentage of monthly income. 2% is a good starting point.">{InfoCircle}</span>
                        <ReactTooltip />
                    </label>
                    <input 
                        type="number" 
                        name="vacancy-rate" 
                        min="0" 
                        onChange={this.updateVacancyRate}
                        value={this.state.vacancyRate}
                        placeholder="Enter percentage of vacancy."
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