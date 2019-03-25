import React from 'react';
import FishImage from '../components/FishImage'
import Grid from '@material-ui/core/Grid'

const FishImagesContainer = (props) => {
      return (

          <Grid container justify='center'>
        {props.fish.map (fish => <FishImage handleClickImage={props.handleClickImage} fish={fish}/>)}
        </Grid>

      )
}


export default FishImagesContainer
