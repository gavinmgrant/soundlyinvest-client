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
        miscellaneous: '',
        vacancyRate: '',
        pagePurchase: false,
        pageIncome: false,
        pageExpenses: false,
        pageReport: false,
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

  handleMiscellaneous = fee => {
    this.setState({
      miscellaneous: fee
    })
  };

  handleVacancyRate = rate => {
    this.setState({
      vacancyRate: rate
    })
  };

  handlePagePurchase = tf => {
    this.setState({
      pagePurchase: tf
    })
  };

  handlePageIncome = tf => {
    this.setState({
      pageIncome: tf
    })
  };

  handlePageExpenses = tf => {
    this.setState({
      pageExpenses: tf
    })
  };

  handlePageReport = tf => {
    this.setState({
      pageReport: tf
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
      miscellaneous: this.state.miscellaneous,
      vacancyRate: this.state.vacancyRate,
      pagePurchase: this.state.pagePurchase,
      pageIncome: this.state.pageIncome,
      pageExpenses: this.state.pageExpenses,
      pageReport: this.state.pageReport,
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
      setMiscellaneous: this.handleMiscellaneous,
      setVacancyRate: this.handleVacancyRate,
      setPagePurchase: this.handlePagePurchase,
      setPageIncome: this.handlePageIncome,
      setPageExpenses: this.handlePageExpenses,
      setPageReport: this.handlePageReport,
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