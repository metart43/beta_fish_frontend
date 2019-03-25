import React from 'react';
import FishCard from '../components/FishCard'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


class FishIndex extends React.Component {
  constructor() {
    super()

  }

  render(){
    console.log(this.props.fish);
    return (
      <Grid container justify="center" >
        {this.props.fish.map(fish =><FishCard key={fish.id} fish={fish}/>)}
    </Grid>)
  }
}

export default (FishIndex)
