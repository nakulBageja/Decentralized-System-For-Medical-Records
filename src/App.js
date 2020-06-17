import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import Route from './Container/route'
class App extends Component {

  render() {
    return (
      <BrowserRouter> 
        <Route/> 
      </BrowserRouter> 
    );
  }
}

export default App;
