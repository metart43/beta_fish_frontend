/* eslint-disable no-unused-expressions */
import React from 'react';
import BattleField from './BattleField';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Stats from '../components/Stats';
import { Redirect, BrowserRouter } from 'react-router-dom'
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';


class Fight extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      done: false,
      redirect: false,
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

  attack1 = (arg) => {
    arg ?
    this.setState({
      fishHp: this.state.fishHp - Math.floor(this.state.fishPower * 0.01)
    }, this.didLose())
    :
    this.setState({
      opponentHp: this.state.opponentHp - Math.floor(this.state.fishPower * 0.01)
    }, this.didWin())
  }

  attack2 = (arg) => {
    arg ?
    this.setState({
      fishHp: this.state.fishHp - Math.floor(this.state.fishPower * 0.05)
    }, this.didLose())
    :
    this.setState({
      opponentHp: this.state.opponentHp - Math.floor(this.state.fishPower * 0.05)
    }, this.didWin())
    
  }

  attack3 = (arg) => {
    arg ? 
    this.setState({
      fishHp: this.state.fishHp - Math.floor(this.state.fishPower * 0.1)
    }, this.didLose())
    :
    this.setState({
      opponentHp: this.state.opponentHp - Math.floor(this.state.fishPower * 0.1)
    }, this.didWin())
  }

  didWin() {
    if (this.state.opponentHp <= 0) {
      this.postWin(this.props.opponent, this.props.opponent)
    }
  }

  didLose() {
    if (this.state.fishHp <= 0) {
      this.postLoss(this.props.fish, this.props.opponent)
    }
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
        done: true,
        opponentHp: 0
      }, this.props.fishWon(fish))
    })
  }

  postLoss(fish, opponent) {
    fetch('http://localhost:3000/fights', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fish_id: fish.id,
        opponent_id: opponent.id,
        won: false
      }),
    }).then(() => {
      this.setState({
        done: true,
        fishHp: 0
      })
    })
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to="/fishes" />
    }

    return (
      <div>
        <SweetAlert
          show={this.state.done}
          title={this.state.opponentHp === 0 ? "Congratulations!": "Oh No!"}
          type={this.state.opponentHp === 0 ? "success": "error"}
          text={this.state.opponentHp === 0 ? `You beat ${this.state.opponentName}!`: `${this.state.opponentName} beat you!`}
          onConfirm={() => this.setState({done: false}, this.setState({redirect: true}, this.setState({ done: false})))}
        />
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
