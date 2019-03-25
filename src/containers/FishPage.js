import React from 'react';
import Fight from './Fight'
import Title from '../components/Title'
import Form from './Form'
import FishIndex from './FishIndex'

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
        fishArray,
        selectedFish: fishArray[0]
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
      <React.Fragment>
        <Title content={this.state.title} />
        <Fight fish={this.state.selectedFish} opponent={this.state.selectedOpponent} />
        <Form fish={this.state.fishArray.slice(0,10)} addFish={this.addFish}/>
        <FishIndex fish={this.state.fishArray}/>
      </React.Fragment>
    )
  }
}

export default FishPage
