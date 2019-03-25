import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';



const FishCard = (props) => {
let fish = props.fish
return (
  <div className='flip-card'>
  <div className='flip-card-inner'>
    <div className='flip-card-front'><img className='image' alt='' src={require(`../beta_images/${fish.img_url}.png`)}/></div>
    <div className='flip-card-back'>
        <div><strong>{fish.name}</strong></div>
        <div><i class="material-icons">healing</i> {fish.hp}</div>
        <div><i class="material-icons">flash_on</i> {fish.power}</div>
      <div>Games won: {fish.games_won}</div>
    </div>
  </div>
  </div>
)
}

export default (FishCard)
