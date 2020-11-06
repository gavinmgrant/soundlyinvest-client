import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import './Goals.css';

class Goals extends Component {
  render() {
    return (
        <div className="goals">
            <h3>
                Enter your investment goals below:
            </h3>
            <form>
                <section>
                    <section>
                        <label for="grm" data-tip="GRM = Purchase Price / Gross Scheduled Income">Gross Rent Multiplier: </label>
                        <ReactTooltip />
                        <input type="number" name="grm" min="1" max="20" placeholder="14" />
                    </section>
                    <section>
                        <label for="cap-rate" data-tip="CAP Rate = Yearly Net Operating Income / Purchase Price">Cap Rate (%): </label>
                        <ReactTooltip />
                        <input type="number" name="cap-rate" placeholder="4" min="0"/>
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

export default Goals;