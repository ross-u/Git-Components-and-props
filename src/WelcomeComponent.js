import React from 'react';

class WelcomeComponent extends React.Component {
  render () {
    return(
      <div className='welcome'>
        <h1>Welcome to Ironhack - {this.props.cityName}</h1>
      </div>
    )
  }
} 

export default WelcomeComponent;