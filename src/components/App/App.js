import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SoundlyInvestContext from '../../contexts/SoundlyInvestContext';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        propAddress: '',
      }
  };

  handleSetAddress = address => {
    this.setState({
      propAddress: address
    })
  };

  render() {
    const value = {
      propAddress: this.state.propAddress,
      setAddress: this.handleSetAddress,
    }

    return (
      <SoundlyInvestContext.Provider value={value}>
        <Router>
          <div className="app">
            <Header />
            <Main />
            <Footer />
          </div>
        </Router>
      </SoundlyInvestContext.Provider>
    );
  }
};

export default App;