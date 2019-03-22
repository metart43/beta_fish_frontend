import React from 'react';
import Fish from '../components/Fish'


class BattleField extends React.Component {
  render(){
  return (
    <div>{'BattleField'}
      <Fish />
      <Fish />
      </div>
  )
  }
}

export default BattleField
