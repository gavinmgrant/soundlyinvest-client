import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;