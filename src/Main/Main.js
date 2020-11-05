import React, { Component } from 'react';
import './Main.css';
import Landing from '../Landing/Landing';

class Main extends Component {
  render() {
    return (
      <nav className="main">
          <Landing />
      </nav>
    );
  }
}
  
export default Main;