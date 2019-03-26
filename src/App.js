import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import FishPage from './containers/FishPage'

class App extends Component {

  render() {
    return (
      <div className="App">
      <FishPage />
      </div>
    );
  }
}

export default App;
