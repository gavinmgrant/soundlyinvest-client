import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
                        <label for="unit-1">Unit 1: </label>
                        <input type="number" name="unit-1" min="0"/>
                    </section>
                    <section>
                        <label for="unit-2">Unit 2: </label>
                        <input type="number" name="unit-2" min="0"/>
                    </section>
                    <section>
                        <label for="unit-3">Unit 3: </label>
                        <input type="number" name="unit-3" min="0"/>
                    </section>
                    <section>
                        <label for="unit-4">Unit 4: </label>
                        <input type="number" name="unit-4" min="0"/>
                    </section>
                    <section>
                        <label for="storage">Storage: </label>
                        <input type="number" name="storage" min="0"/>
                    </section>
                    <section>
                        <label for="parking">Parking: </label>
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