import React from 'react';
import FishCard from '../components/FishCard'

class FishIndex extends React.Component {
  render(){
    return (
      <div>
        {this.props.fish.map(fish => <FishCard clickFish={null} key={fish.id} fish={fish}/>)}
    </div>)
  }
}

export default FishIndex
