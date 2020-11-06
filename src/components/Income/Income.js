import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import { InfoCircle } from '../../utils/Icons';
import './Income.css';

class Income extends Component {
  render() {
    return (
        <div className="income">
            <h3>
                Enter projected monthly income below:
            </h3>
            <form>
                <section>
                    <section>
                        <label for="rental">Rental Income ($): </label>
                        <span data-tip="If multifamily, enter total rent for all units.">{InfoCircle}</span>
                        <ReactTooltip />
                        <input type="number" name="unit-1" min="0"/>
                    </section>
                    <section>
                        <label for="storage">Storage Income ($): </label>
                        <span data-tip="If renting storage space, enter total amount here.">{InfoCircle}</span>
                        <ReactTooltip />
                        <input type="number" name="storage" min="0"/>
                    </section>
                    <section>
                        <label for="parking">Parking Income ($): </label>
                        <span data-tip="If renting parking space(s), enter total amount here.">{InfoCircle}</span>
                        <ReactTooltip />
                        <input type="number" name="parking" min="0"/>
                    </section>
                </section>
                <Link to="/expenses">
                    <input className="submit-button" type="submit" value="Next" />
                </Link>
            </form>
        </div>
    );
  }
}

export default Income;