import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount(){
    fetch('http://localhost:3000/fish')
    .then(res => res.json())
    .then(fishData => console.log(fishData))
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
