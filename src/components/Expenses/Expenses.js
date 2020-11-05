import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
                        <label for="property-taxes">Property Taxes: </label>
                        <input type="number" name="property-taxes" min="0"/>
                    </section>
                    <section>
                        <label for="property-manager">Property Manager: </label>
                        <input type="number" name="unit-2" min="0"/>
                    </section>
                    <section>
                        <label for="insurance">Insurance: </label>
                        <input type="number" name="insurance" min="0"/>
                    </section>
                    <section>
                        <label for="water-sewer">Water & Sewer: </label>
                        <input type="number" name="water-sewer" min="0"/>
                    </section>
                    <section>
                        <label for="gardener">Gardener: </label>
                        <input type="number" name="gardener" min="0"/>
                    </section>
                    <section>
                        <label for="maintenance">Maintenance: </label>
                        <input type="number" name="maintenance" min="0"/>
                    </section>
                    <section>
                        <label for="vacancy">Vacancy: </label>
                        <input type="number" name="vacancy" min="0"/>
                    </section>
                </section>
                <Link to="/loan">
                    <input className="submit-button" type="submit" value="Next" />
                </Link>
            </form>
        </div>
    );
  }
}

export default Expenses;