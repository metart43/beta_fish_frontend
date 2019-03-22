import React from 'react';
import Fight from './Fight'
import Form from '../components/Form'

class FishPage extends React.Component {
  constructor() {
    super()
    this.state = {
      fishArray: []
    }
  }

  render(){
    return (
      <div>
        <Fight />
        <Form />
      </div>
    )
  }
}

export default FishPage
