import React from 'react';
import BattleField from './BattleField'
import Stats from '../components/Stats'

class Fight extends React.Component {

  render() {
    return (
      <div>
      <BattleField />
      <Stats />
      </div>
    )
  }
}

export default Fight
