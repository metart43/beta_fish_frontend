import React from 'react';
import BattleField from './BattleField'
import Stats from '../components/Stats'

class Fight extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      opponentPower: props.opponent ? props.opponent.power : 0,
      opponentHp: props.opponent ? props.opponent.hp : 0,
      opponentImg: props.opponent ? props.opponent.img_url : '',
      fishImg: props.fish ? props.fish.img_url : ''
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.opponentPower) {
      return ({
        opponentPower: props.opponent ? props.opponent.power : 0,
        opponentHp: props.opponent ? props.opponent.hp : 0,
        opponentImg: props.opponent ? props.opponent.img_url : '',
        fishImg: props.fish ? props.fish.img_url : ''
      })
    } else {
      return null
    }
  }

  attack1 = () => {
    this.setState({
      opponentHp: this.state.opponentHp - 10
    })
    this.didWin()
  }

  attack2 = () => {
    this.setState({
      opponentHp: this.state.opponentHp - 20
    })
    this.didWin()
  }

  attack3 = () => {
    this.setState({
      opponentHp: this.state.opponentHp - 30
    })
    this.didWin()
  }

  didWin() {
    // check if opponenthp is <= 0
    // eslint-disable-next-line no-unused-expressions
    this.state.opponentHp <= 0 ? alert('ya did it') : null
  }

  render() {
    return (
      <div>
        <BattleField attack1={this.attack1} attack2={this.attack2} attack3={this.attack3} fish={this.state.fishImg} opponent={this.state.opponentImg} />
        <Stats opponentHp={this.state.opponentHp} opponentPower={this.state.opponentPower} />
      </div>
    )
  }
}

export default Fight
