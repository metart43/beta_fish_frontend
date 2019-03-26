import React from 'react';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import Delete from '@material-ui/icons/Delete'


const FishCard = (props) => {
let fish = props.fish
return (
  <div className='flip-card'>
  <div className='flip-card-inner'>
    <div className='flip-card-front'>
      <img className='image' alt='' src={require(`../beta_images/${fish.img_url}.png`)}/>
      <strong>{fish.name}</strong>
    </div>
    <div className='flip-card-back'>
        <div><strong>{fish.name}</strong></div>
        <div><i className="material-icons">healing</i> {fish.hp}</div>
        <div><i className="material-icons">flash_on</i> {fish.power}</div>
      <div>Games won: {fish.games_won}</div>
      <Link id='link'to={'/fight'}>
      <Chip variant="outlined" label={"FIGHT!"} onClick={() => props.clickFish(fish)} />
      </Link>
      <Link id='link'to={'/fishes'}>
      <Chip variant="outlined" label={<Delete/>} onClick={()=> props.deleteFish(fish)}/>
      </Link>
    </div>
  </div>
  </div>
)
}

export default (FishCard)
