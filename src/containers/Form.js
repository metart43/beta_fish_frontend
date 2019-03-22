import React from 'react';
import FishImage from '../components/FishImage'

class Form extends React.Component {
  constructor(){
    super()
    this.state={
      fishName: 'lol'
    }
  }

getName = (e) => {
  e.preventDefault()
  console.log(e.target.value)
  this.setState({
    fishName: e.target.value,
    fishImage: ''
  })
}

  render(){
    return(
    <div>
        <form>
      <label>
        Name:
          <input type="text" name="name" value={this.state.fishName} onChange={this.getName}/>
      </label>
          <FishImage />
          <FishImage />
        <input type="submit" />
        </form>
    </div>
    )
  }
}

export default Form
