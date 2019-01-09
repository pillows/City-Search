import React, { Component } from 'react';
import './App.css';
import ZipCode from './components/ZipCode';

class App extends Component {
  render() {
    return(
    <div>
      <h1 id= "header-layout">Zip and City Search</h1>
      <ZipCode />
      
    </div>
    );
  }
}

export default App;