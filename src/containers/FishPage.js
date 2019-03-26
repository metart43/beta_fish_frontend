import React from 'react';
import Fight from './Fight'
import Form from './Form'
import FishIndex from './FishIndex'
<<<<<<< HEAD
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
=======
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
>>>>>>> 6f3178b3da98ac809129443bd138f597c6ae0f06
import NavBar from '../components/NavBar'

class FishPage extends React.Component {
  constructor() {
    super()
    this.state = {
      fishArray: [],
      opponents: [],
      selectedFish: null,
      selectedOpponent: null,
      title: 'BETTA FISH FIGHT CLUB'
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/fish')
    .then(resp => resp.json())
    .then(fishArray => {
      this.setState({
        fishArray
      })
    })
    fetch('http://localhost:3000/opponents')
    .then(resp => resp.json())
    .then(opponents => {
      this.setState({
        opponents,
        selectedOpponent: opponents[0]
      })
    })

  }


  handleClickFishCard = (fish) => {
    this.setState({
      selectedFish: fish
    })
  }

  addFish = (fish) => {
    this.setState({
      fishArray:[...this.state.fishArray, fish]
    })
  }

  render(){
    return (
<<<<<<< HEAD
      <React.Fragment>
        <Title content={this.state.title} />
        <BrowserRouter>
        <NavBar />
=======
        <Router>
          <React.Fragment>
          <NavBar />
>>>>>>> 6f3178b3da98ac809129443bd138f597c6ae0f06
        <Switch>
          <Route path="/fishes" render={() => <FishIndex fish={this.state.fishArray} clickCard={this.handleClickFishCard} />} />
          <Route path="/fight" render={() => <Fight fish={this.state.selectedFish} opponent={this.state.selectedOpponent} />} />
          <Route path="/hatch" render={() => <Form fish={this.state.fishArray.slice(0, 10)} addFish={this.addFish} />} />
        </Switch>
          </React.Fragment>
        </Router>
    )
  }
}

export default FishPage
