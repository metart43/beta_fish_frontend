import React from 'react';
import Card from '@material-ui/core/Card'

const FishImage = (props) => {
  return (
    <div>
      <Card id='FishImage' onClick={(event) => {props.handleClickImage(props.fish, event)}}>
      <img className='image' src={require(`../beta_images/${props.fish}.png`)}/>
      </Card>
  </div>
  )
}

export default FishImage
