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
    clickedImage: fish.img_url
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
    return(
      <div>
        <form onSubmit={this.submitFish}>
          <InputLabel>
            Fish Name:
            <Input type="text" name="name" value={this.state.fishName} onChange={this.getName}/>
          </InputLabel>
          <Button id='FishSubmit'variant="outlined" type='submit' label='submit'>
          Hatch
        </Button>
        </form>
        <Grid justify='center'>
        <FishImagesContainer handleClickImage={this.handleClickImage} fish={this.props.fish}/>
        </Grid>
        </div>
    )
  }
}

export default Form
