import React from 'react';
import Title from '../components/Title'
import PlayField from './PlayField'
import Stats from '../components/Stats'

class Fight extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div>
      <Title />
      <PlayField />
      <Stats />
      </div>
    )
  }
}

export default Fight
