import React from 'react';
import FishCard from '../components/FishCard'

class FishIndex extends React.Component {
  constructor() {
    super()

  }
  render(){
    console.log(this.props.fish);
    return (
      <div>
        {this.props.fish.map(fish => <FishCard key={fish.id} fish={fish}/>)}
    </div>)
  }
}

export default FishIndex
