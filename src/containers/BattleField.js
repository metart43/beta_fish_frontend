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
      mouseThere: true
    }
  }

  componentDidMount() {
    const bf = document.querySelector('.battlefield')
    let fishX = 30
    let fishY = 80
    let opponentX = bf.clientWidth - 90
    let opponentY = bf.clientHeight - 30
    this.setState({
      fishX,
      fishY,
      opponentX,
      opponentY,
      moveInterval: setInterval(this.updateOpponentLocation, 2000),
      attackInterval: setInterval(this.opponentAttack, 500)
    })
    document.addEventListener('keydown', this.attack)
    // eslint-disable-next-line no-unused-expressions
    this.state.moveInterval
  }

  componentWillUnmount() {
    clearInterval(this.state.moveInterval)
    clearInterval(this.state.attackInterval)
  }

  updateOpponentLocation = () => {
    const bf = document.querySelector('.battlefield')
    const opponentX = (Math.random() * ((bf.clientWidth - 90) - 30)) + 30
    const opponentY = (Math.random() * ((bf.clientHeight - 30) - 80)) + 80
    this.setState({
      opponentX,
      opponentY
    })
  }

  opponentAttack = () => {
    const num = Math.floor(Math.random() * (3 - 1)) + 1
    console.log(num)
    if (this.isWithinRange()) {
      switch (num) {
        case 1:
          console.log('attack 1')
          this.props.attack1('fish')
          break;
        case 2:
          console.log('attack 2')
          this.props.attack2('fish')
          break;
        case 3:
          console.log('attack 3')
          this.props.attack3('fish')
          break;
      }
    }
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
      <div onClick={this.leaveMouse} onMouseEnter={this.enterMouse} onMouseMove={this.followMouse} onMouseLeave={this.leaveMouse} className='battlefield'>
        <Fish fish={this.props.fish} left={this.state.fishX} top={this.state.fishY} />
        <Fish fish={this.props.opponent} left={this.state.opponentX} top={this.state.opponentY} />
      </div>
    </div>
  )
  }
}

export default BattleField
