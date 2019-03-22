import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import FishPage from './containers/FishPage'

class App extends Component {

  componentDidMount(){
    fetch('http://localhost:3000/fish')
    .then(res => res.json())
    .then(fishData => console.log(fishData))
  }

  render() {
    return (
      <div className="App">
      <NavBar />
      <FishPage />
      </div>
    );
  }
}

export default App;
