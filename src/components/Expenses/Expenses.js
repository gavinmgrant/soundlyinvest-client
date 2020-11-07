import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import { InfoCircle } from '../../utils/Icons';
import './Expenses.css';

class Expenses extends Component {
  render() {
    return (
        <div className="expenses">
            <h3>
                Enter projected monthly expenses below:
            </h3>
            <form>
                <section>
                    <section>
                        <label for="property-tax-rate">Property Tax Rate (%): </label>
                        <span data-tip="Enter a whole number. If 1%, enter 1, not 0.01.">{InfoCircle}</span>
                        <ReactTooltip />
                        <input type="number" name="property-tax-rate" min="0"/>
                    </section>
                    <section>
                        <label for="property-manager">Property Manager ($): </label>
                        <span data-tip="If you have a property manager, enter monthly fee here.">{InfoCircle}</span>
                        <ReactTooltip />
                        <input type="number" name="unit-2" min="0"/>
                    </section>
                    <section>
                        <label for="insurance">Insurance ($): </label>
                        <span data-tip="Enter total cost for insurance such as hazard and umbrella.">{InfoCircle}</span>
                        <ReactTooltip />
                        <input type="number" name="insurance" min="0"/>
                    </section>
                    <section>
                        <label for="utilities">Utilities ($): </label>
                        <span data-tip="Enter all utility expenses paid by the landlord.">{InfoCircle}</span>
                        <ReactTooltip />
                        <input type="number" name="utilities" min="0"/>
                    </section>
                    <section>
                        <label for="gardener">Gardener ($): </label>
                        <span data-tip="Enter amount reserved for managing the landscape.">{InfoCircle}</span>
                        <ReactTooltip />
                        <input type="number" name="gardener" min="0"/>
                    </section>
                    <section>
                        <label for="maintenance">Maintenance ($): </label>
                        <span data-tip="Enter miscellaneous maintenance expenses here.">{InfoCircle}</span>
                        <ReactTooltip />
                        <input type="number" name="maintenance" min="0"/>
                    </section>
                    <section>
                        <label for="vacancy-rate">Vacancy Rate (%): </label>
                        <span data-tip="Enter a whole number. This is a percentage of monthly income.">{InfoCircle}</span>
                        <ReactTooltip />
                        <input type="number" name="vacancy-rate" min="0" placeholder="2% is a good starting point."/>
                    </section>
                </section>
                <Link to="/report">
                    <input className="submit-button" type="submit" value="Finish" />
                </Link>
            </form>
        </div>
    );
  }
}

export default Expenses;