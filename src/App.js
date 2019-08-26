import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import caculate from './logic/calculate';
import './App.css';

class App extends Component {
  state = {
    next:'',
    total:'',
    operator:null
  }
  printName = buttomName => {
  		this.setState(caculate(this.state,buttomName));
  };
  render() {
    return (
    	<div className="app-panel">
    	  <Display value={this.state.next || this.state.total || '0'} />
    	  <ButtonPanel clickHandler={this.printName}/>
        </div>
    );
  }
}

export default App;
