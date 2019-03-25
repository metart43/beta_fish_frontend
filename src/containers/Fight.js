import React from 'react';
import BattleField from './BattleField'
import Stats from '../components/Stats'

class Fight extends React.Component {

  attack1 = () => {
    this.setState({
      opponentHp: this.state.opponent.hp - 10
    })
  }

  attack2 = () => {
    this.setState({
      opponentHp: this.state.opponent.hp - 20
    })
  }

  attack3 = () => {
    this.setState({
      opponentHp: this.state.opponent.hp - 30
    })
  }

  render() {
    return (
      <div>
        <BattleField attack1={this.attack1} attack2={this.attack2} attack3={this.attack3} fish={this.props.fish} opponent={this.props.opponent} />
        <Stats />
      </div>
    )
  }
}

export default Fight
