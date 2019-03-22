import React from 'react';


const FishCard = (props) => {
let fish = props.fish

return (
  <div>
    <div><img alt='' src={fish.img_url}/></div>
    <div className=''>Name: {fish.name}</div>
    <div className=''>HP: {fish.hp}</div>
    <div className=''>Power: {fish.power}</div>
    <div className=''>Games won: {fish.games_won}</div>
  </div>
)
}

export default FishCard
