import React from 'react';
import Fight from './Fight'
import Form from './Form'
import FishIndex from './FishIndex'

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
        <FishIndex />
      </div>
    )
  }
}

export default FishPage
