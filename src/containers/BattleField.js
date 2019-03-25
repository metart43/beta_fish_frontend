/* eslint-disable default-case */
import React from 'react';
import Fish from '../components/Fish'


class BattleField extends React.Component {

  constructor() {
    super()

    this.state = {
      fishX: 0,
      fishY: 0,
      opponentX: 0,
      opponentY: 0,
      mouseThere: false
    }
  }

  componentDidMount() {
    const bf = document.querySelector('.battlefield')
    let fishX = 53
    let fishY = 160
    let opponentX = bf.clientWidth - 72
    let opponentY = 540
    this.setState({
      fishX,
      fishY,
      opponentX,
      opponentY,
      moveInterval: setInterval(this.updateOpponentLocation, 1000)
    })
    document.addEventListener('keydown', this.attack)
    // eslint-disable-next-line no-unused-expressions
    this.state.moveInterval
  }

  componentWillUnmount() {
    clearInterval(this.state.moveInterval)
  }

  updateOpponentLocation = () => {
    const opponentX = (Math.random() * (540 - 53)) + 53
    const opponentY = (Math.random() * (540 - 160)) + 160
    this.setState({
      opponentX,
      opponentY
    })
  }

  enterMouse = () => {
    this.setState({
      mouseThere: true
    })
  }

  followMouse = (event) => {
    if (this.state.mouseThere) {
      this.setState({
        fishX: (event.pageX - 50),
        fishY: (event.pageY - 50)
      })
    }
  }

  leaveMouse = () => {
    this.setState({
      mouseThere: false
    })
    this.isWithinRange()
  }

  isWithinRange() {
    let x1 = this.state.fishX
    let x2 = this.state.opponentX
    let y1 = this.state.fishY
    let y2 = this.state.opponentY
    let ydifference = (y2 - y1) ** 2
    let xdifference = (x2 - x1) ** 2
    let distance = Math.sqrt(xdifference + ydifference)
    return distance < 80
  }
 
  attack = (e) => {
    if (this.isWithinRange()) {
      switch (e.key) {
        case '1':
          console.log('attack 1')
          this.props.attack1()
          break;
        case '2':
          console.log('attack 2')
          this.props.attack2()
          break;
        case '3':
          console.log('attack 3')
          this.props.attack3()
          break;
        default:
          console.log(e.key)
      }
    }
  }

  render(){
  return (
    <div className={'battlefield-container'}>
      <div onClick={this.leaveMouse} onMouseEnter={this.enterMouse} onMouseMove={this.followMouse} onMouseLeave={this.leaveMouse} className='battlefield'>{'BattleField'}
        <Fish fish={this.props.fish} left={this.state.fishX} top={this.state.fishY} />
        <Fish fish={this.props.opponent} left={this.state.opponentX} top={this.state.opponentY} />

      </div>
    </div>
  )
  }
}

export default BattleField
