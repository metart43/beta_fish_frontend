import React from 'react';

const Fish = (props) => {

  const styling = {
    position: 'absolute',
    left: props.left + 'px',
    top: props.top + 'px',
  }

  return (
    <div>
      {props.fish ?
        <img className='image' src={require(`../beta_images/${props.fish}.png`)} alt='fish' style={styling} /> : null}
    </div>
  )
}

export default Fish
