import React from 'react';
import FishCard from '../components/FishCard'

class FishIndex extends React.Component {
  constructor() {
    super()

  }
  render(){
    return (
      <div>
      {'Fish Index:'}
      <FishCard />
    </div>)
  }
}

export default FishIndex
