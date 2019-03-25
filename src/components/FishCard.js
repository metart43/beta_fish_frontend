import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const FishCard = (props) => {
let fish = props.fish
return (
  <Card>
     <CardActionArea>
    <CardContent>
    <CardMedia><img className='image' alt='' src={require(`../beta_images/${fish.img_url}.png`)}/></CardMedia>
    <div className=''>Name: {fish.name}</div>
    <div className=''>HP: {fish.hp}</div>
    <div className=''>Power: {fish.power}</div>
    <div className=''>Games won: {fish.games_won}</div>
    </CardContent>
  </CardActionArea>
  </Card>
)
}

export default (FishCard)
