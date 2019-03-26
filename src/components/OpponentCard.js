import React from 'react';



const OpponentCard = (props) => {
  let fish = props.fish
return (
  <div className='opponent-card' onClick={(event) => props.handleSelectOpponent(props.fish, event)}>
    <img className='image' alt='' src={require(`../beta_images/${fish.img_url}.png`)}/>
    <strong>{fish.name}</strong>
    <div><i className="material-icons">healing</i> {fish.hp}</div>
    <div><i className="material-icons">flash_on</i>  {fish.power}</div>
  </div>
)
}

export default OpponentCard
