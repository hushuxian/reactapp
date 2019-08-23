import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import './App.css';

class App extends Component {

  printName = buttomName => {
  		console.log(buttomName);
  };
  render() {
    return (
    	<div className="app-panel">
    	  <Display />
    	  <ButtonPanel clickHandler={this.printName}/>
        </div>
    );
  }
}

export default App;
