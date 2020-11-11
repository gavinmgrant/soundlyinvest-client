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
        purchasePrice: '',
        downPayment: '',
        interestRate: '',
        loanPeriod: '',
        rentalIncome: '',
        storageIncome: '',
        parkingIncome: '',
        taxRate: '',
        propertyManager: '',
        insurance: '',
        utilities: '',
        gardener: '',
        maintenance: '',
        vacancyRate: '',
      }
  };

  handleSetAddress = address => {
    this.setState({
      propAddress: address
    })
  };

  handleSetPrice = price => {
    this.setState({
      purchasePrice: price
    })
  };

  handleSetDownPayment = dp => {
    this.setState({
      downPayment: dp
    })
  };

  handleSetInterestRate = rate => {
    this.setState({
      interestRate: rate
    })
  };

  handleLoanPeriod = years => {
    this.setState({
      loanPeriod: years
    })
  };

  handleRentalIncome = income => {
    this.setState({
      rentalIncome: income
    })
  };

  handleStorageIncome = income => {
    this.setState({
      storageIncome: income
    })
  };

  handleParkingIncome = income => {
    this.setState({
      parkingIncome: income
    })
  };

  handleTaxRate = rate => {
    this.setState({
      taxRate: rate
    })
  };

  handlePropertyManager = fee => {
    this.setState({
      propertyManager: fee
    })
  };

  handleInsurance = fee => {
    this.setState({
      insurance: fee
    })
  };

  handleUtilities = fee => {
    this.setState({
      utilities: fee
    })
  };

  handleGardener = fee => {
    this.setState({
      gardener: fee
    })
  };

  handleMaintenance = fee => {
    this.setState({
      maintenance: fee
    })
  };

  handleVacancyRate = rate => {
    this.setState({
      vacancyRate: rate
    })
  };

  render() {
    const value = {
      propAddress: this.state.propAddress,
      purchasePrice: this.state.purchasePrice,
      downPayment: this.state.downPayment,
      interestRate: this.state.interestRate,
      loanPeriod: this.state.loanPeriod,
      rentalIncome: this.state.rentalIncome,
      storageIncome: this.state.storageIncome,
      parkingIncome: this.state.parkingIncome,
      taxRate: this.state.taxRate,
      propertyManager: this.state.propertyManager,
      insurance: this.state.insurance,
      utilities: this.state.utilities,
      gardener: this.state.gardener,
      maintenance: this.state.maintenance,
      vacancyRate: this.state.vacancyRate,
      setAddress: this.handleSetAddress,
      setPrice: this.handleSetPrice,
      setDownPayment: this.handleSetDownPayment,
      setInterestRate: this.handleSetInterestRate,
      setLoanPeriod: this.handleLoanPeriod,
      setRentalIncome: this.handleRentalIncome,
      setStorageIncome: this.handleStorageIncome,
      setParkingIncome: this.handleParkingIncome,
      setTaxRate: this.handleTaxRate,
      setPropertyManager: this.handlePropertyManager,
      setInsurance: this.handleInsurance,
      setUtilities: this.handleUtilities,
      setGardener: this.handleGardener,
      setMaintenance: this.handleMaintenance,
      setVacancyRate: this.handleVacancyRate,
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