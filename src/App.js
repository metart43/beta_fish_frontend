import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import FishPage from './containers/FishPage'

class App extends Component {

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
