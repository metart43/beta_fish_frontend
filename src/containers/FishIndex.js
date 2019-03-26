import React from 'react';
import FishCard from '../components/FishCard'
import Grid from '@material-ui/core/Grid';



class FishIndex extends React.Component {

  render(){
    return (
      <Grid container justify="center" >
        {this.props.fish.map(fish => <FishCard deleteFish={this.props.deleteFish} clickFish={this.props.clickCard} key={fish.id} fish={fish}/>)}
    </Grid>)
  }
}

export default (FishIndex)
