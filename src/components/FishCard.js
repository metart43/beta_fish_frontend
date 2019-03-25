import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const FishCard = (props) => {
let fish = props.fish
return (
  <div className='flip-card'>
  <div className='flip-card-inner'>
    <div className='flip-card-front'><img className='image' alt='' src={require(`../beta_images/${fish.img_url}.png`)}/></div>
    <div className='flip-card-back'>
        <div><strong>{fish.name}</strong></div>
      <div>HP: {fish.hp}</div>
      <div>Power: {fish.power}</div>
      <div>Games won: {fish.games_won}</div>
    </div>
  </div>
  </div>
)
}

export default (FishCard)
