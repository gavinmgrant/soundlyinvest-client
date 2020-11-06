import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import { InfoCircle } from '../../utils/Icons';
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
                        <label for="grm">Gross Rent Multiplier: </label>
                        <span data-tip="GRM = Purchase Price / Gross Scheduled Income">{InfoCircle}</span>
                        <ReactTooltip />
                        <input type="number" name="grm" min="1" max="20" placeholder="A good range is 9 to 15." />
                    </section>
                    <section>
                        <label for="cap-rate">Cap Rate (%): </label>
                        <span data-tip="CAP Rate = Yearly Net Operating Income / Purchase Price">{InfoCircle}</span>
                        <ReactTooltip />
                        <input type="number" name="cap-rate" placeholder="A good range is 4% to 10%." min="0"/>
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