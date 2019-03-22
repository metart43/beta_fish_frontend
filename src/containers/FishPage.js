import React from 'react';
import Fight from './Fight'
import Title from '../components/Title'
import Form from './Form'

class FishPage extends React.Component {
  constructor() {
    super()
    this.state = {
      fishArray: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/fish')
    .then(resp => resp.json())
    .then(fishArray => {
      this.setState({
        fishArray
      })
    })
  }

  render(){
    return (
      <div>
        <Title />
        <Fight />
        <Form />
      </div>
    )
  }
}

export default FishPage