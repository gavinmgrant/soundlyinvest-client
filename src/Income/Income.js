import React, { Component } from 'react';

class Income extends Component {
  render() {
    return (
        <div className="income">
            <form>
                <section>
                    <section>
                        <label for="unit-1">Unit 1: </label>
                        <input type="text" name="unit-1" />
                    </section>
                    <section>
                        <label for="unit-2">Unit 2: </label>
                        <input type="text" name="unit-2" />
                    </section>
                    <section>
                        <label for="unit-3">Unit 3: </label>
                        <input type="text" name="unit-3" />
                    </section>
                    <section>
                        <label for="unit-4">Unit 4: </label>
                        <input type="text" name="unit-4" />
                    </section>
                    <section>
                        <label for="storage">Storage: </label>
                        <input type="text" name="storage" />
                    </section>
                    <section>
                        <label for="parking">Parking: </label>
                        <input type="text" name="parking" />
                    </section>
                </section>
                <input class="submit-button" type="submit" />
            </form>
        </div>
    );
  }
}

export default Income;