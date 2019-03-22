import React from 'react';

class Form extends React.Component {
  constructor(){
    super()
    this.state={
      fishName: ''
    }
  }

getName(){
  this.setState({
    fishName: this.state.fishName
  })
}

  render(){
    return(
      <div>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value={this.state.firstName} onChange={this.getName}/>
        </form>
      </div>
    )
  }
}

export default Form
