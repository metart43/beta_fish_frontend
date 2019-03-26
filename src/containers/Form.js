import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'
import FishImagesContainer from './FishImagesContainer'
import Grid from '@material-ui/core/Grid'

class Form extends React.Component {
  constructor(){
    super()
    this.state={
      fishName: '',
      clickedImage: '',
      newFish: '',
      clicked: false
    }
  }

getName = (event) => {
  this.setState({
    fishName: event.target.value
  })
}

handleClickImage = (fish, event) => {
  this.state.clicked ?
  event.currentTarget.id = 'highlightedCard' : event.currentTarget.id = ''
  this.setState({
    clicked: !this.state.clicked,
    clickedImage: fish
  })
}

  submitFish = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/fish', {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
    'Content-Type': 'application/json',
  },
      body: JSON.stringify({
        name: this.state.fishName,
        img_url: this.state.clickedImage
    }),
  })
  .then(res => res.json())
  .then(newFish => this.props.addFish(newFish))
}

  render(){
    const fishes = ['fish1', 'fish2', 'fish3', 'fish4', 'fish5', 'fish6', 'fish7', 'fish8', 'fish9', 'fish10', 'fish11']
    return(
      <div>
        <h2>Hatch a Fish Egg!</h2>
        <form onSubmit={this.submitFish}>
          <InputLabel>
            Fish Name:
            <Input type="text" name="name" value={this.state.fishName} onChange={this.getName}/>
          </InputLabel>
          <FishImagesContainer handleClickImage={this.handleClickImage} fish={fishes}/>
          <Button id='FishSubmit'variant="outlined" type='submit' label='submit'>
          Hatch
        </Button>
        </form>
        <Grid justify='center'>
        </Grid>
        </div>
    )
  }
}

export default Form
