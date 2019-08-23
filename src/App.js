import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import './App.css';

class App extends Component {
  render() {


  	
    return (
    	<div className="app-panel">
    	  <Display />
    	  <ButtonPanel />
        </div>
    );
  }
}

export default App;
