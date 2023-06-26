import React, { Component } from 'react';
import UserMessage from './UserMessage';
import UserData from './UserData';

class NestingComponents extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      isLoaded: true,
      isLoggedIn: true
    }
  }
  render() {
    return (
      <div>
        <UserData isLoggedIn={this.state.isLoggedIn} />
        <UserMessage isLoggedIn={this.state.isLoggedIn} />
      </div>
    )
  }
}

export default NestingComponents