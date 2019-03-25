/* eslint-disable no-unused-expressions */
import React from 'react';
import BattleField from './BattleField';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Stats from '../components/Stats';
import { Redirect, BrowserRouter } from 'react-router-dom'

class Fight extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      won: false,
      opponentPower: 0,
      opponentHp: 0,
      opponentImg: '',
      opponentName: '',
      fishPower: 0,
      fishHp: 0,
      fishName: '',
      fishImg: ''
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.opponentPower || !state.fishPower) {
      return ({
        opponentPower: props.opponent ? props.opponent.power : 0,
        opponentHp: props.opponent ? props.opponent.hp : 0,
        opponentName: props.opponent ? props.opponent.name : '',
        opponentImg: props.opponent ? props.opponent.img_url : '',
        fishPower: props.fish ? props.fish.power : 0,
        fishHp: props.fish ? props.fish.hp : 0,
        fishName: props.fish ? props.fish.name : '',
        fishImg: props.fish ? props.fish.img_url : ''
      })
    } else {
      return null
    }
  }

  attack1 = () => {
    this.setState({
      opponentHp: this.state.opponentHp - Math.floor(this.state.fishPower * 0.01)
    })
    this.didWin()
  }

  attack2 = () => {
    this.setState({
      opponentHp: this.state.opponentHp - Math.floor(this.state.fishPower * 0.05)
    })
    this.didWin()
  }

  attack3 = () => {
    this.setState({
      opponentHp: this.state.opponentHp - Math.floor(this.state.fishPower * 0.1)
    })
    this.didWin()
  }

  didWin() {
    // check if opponenthp is <= 0
    this.state.opponentHp <= 0 ?
     this.postWin(this.props.fish, this.props.opponent)
     : null
  }

  postWin(fish, opponent) {
    fetch('http://localhost:3000/fights', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fish_id: fish.id,
        opponent_id: opponent.id,
        won: true
      }),
    }).then(() => {
      this.setState({
        won: true
      })
    })
  }

  render() {

    if (this.state.won) {
      return (< BrowserRouter forceRefresh={true} >
              <Redirect to="/fishes" />
            </BrowserRouter >)
    }

    return (
      <div>
        <BattleField attack1={this.attack1} attack2={this.attack2} attack3={this.attack3} fish={this.state.fishImg} opponent={this.state.opponentImg} />
        <GridList cellHeight={100}>
          <GridListTile>
            <Stats hp={this.state.fishHp} power={this.state.fishPower} name={this.state.fishName} />
          </GridListTile>
          <GridListTile>
            <Stats hp={this.state.opponentHp} power={this.state.opponentPower} name={this.state.opponentName} />
          </GridListTile>
        </GridList>
      </div>
    )
  }
}

export default Fight
