import React from 'react';
import Fight from './Fight'
import Form from './Form'
import FishIndex from './FishIndex'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'

class FishPage extends React.Component {
  constructor() {
    super()
    this.state = {
      fishArray: [],
      opponents: [],
      selectedFish: null,
      selectedOpponent: null,
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/fish')
    .then(resp => resp.json())
    .then(fishArray => {
      this.setState({
        fishArray,
        // selectedFish: fishArray[0]
      })
    })
    fetch('http://localhost:3000/opponents')
    .then(resp => resp.json())
    .then(opponents => {
      this.setState({
        opponents,
        // selectedOpponent: opponents[0]
      })
    })

  }

  fishWon = (fish) => {
    const newArr = this.state.fishArray.map(oldFish => {
      if (oldFish === fish) {
        oldFish.games_won += 1
      }
      return oldFish
    })
    this.setState({
      fishArray: newArr
    })
  }

  handleClickFishCard = (fish) => {
    this.setState({
      selectedFish: fish
    }, () => <Redirect to='/fight' />)
  }

  handleSelectOpponent = (opponent,event) => {
    event.currentTarget.id = 'highlightedCard'
    this.setState({
      selectedOpponent: opponent
    }, () => console.log(this.state.selectedOpponent))
  }

  addFish = (fish) => {
    this.setState({
      fishArray:[...this.state.fishArray, fish]
    })
  }

  deleteFish = (fishObj) => {
    const newArr = this.state.fishArray.filter(fish => fish.id !== fishObj.id)
    this.setState({
      fishArray : newArr
    })
    this.handleDelete(fishObj)
  }

  handleDelete = (fishObj) => {
    console.log(fishObj);
  fetch(`http://localhost:3000/fish/${fishObj.id}`, {
    method: 'DELETE'
    })
    .then(res => res.json())
   .catch(errors => console.log(errors))
  }

  render(){
    return (
        <Router>
          <React.Fragment>
          <NavBar />
        <Switch>
          <Route path="/fishes" render={() => <FishIndex fish={this.state.fishArray} handleSelectOpponent={this.handleSelectOpponent} clickCard={this.handleClickFishCard} opponents={this.state.opponents} deleteFish={this.deleteFish}/>} />
          <Route path="/fight" render={() => <Fight fishWon={this.fishWon} fish={this.state.selectedFish} opponent={this.state.selectedOpponent} />} />
          <Route path="/hatch" render={() => <Form fish={this.state.fishArray.slice(0, 10)} addFish={this.addFish} />} />
        </Switch>
          </React.Fragment>
        </Router>
    )
  }
}

export default FishPage
