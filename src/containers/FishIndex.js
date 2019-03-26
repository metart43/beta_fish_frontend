import React from 'react';
import FishCard from '../components/FishCard'
import Grid from '@material-ui/core/Grid';
import OpponentCard from '../components/OpponentCard'
import Card from '@material-ui/core/Card'
import ListSubheader from '@material-ui/core/ListSubheader'


class FishIndex extends React.Component {

  render(){
    return (
      <React.Fragment>
      <Grid container justify="center" >
        {this.props.fish.map(fish => <FishCard deleteFish={this.props.deleteFish} clickFish={this.props.clickCard} key={fish.id} fish={fish}/>)}
    </Grid>
    <h3 justify='flex-start'>Select An Opponent:</h3>
    <Grid container justify="center">
    {this.props.opponents.map(fish => <Card><OpponentCard fish={fish} handleSelectOpponent={this.props.handleSelectOpponent}/> </Card>)}
    </Grid>
  </React.Fragment>)
  }
}

export default (FishIndex)
