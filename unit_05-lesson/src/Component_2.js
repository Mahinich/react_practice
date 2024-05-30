import React from 'react';
import { useState } from 'react';

class Component_1 extends React.Component {
  constructor() {
    super();
    this.state = {count: 0}
  }
  handler = () => {
    let currentCount = this.state.count;
    currentCount++;
    this.setState({
      count: currentCount
    })
  }

  render() {
    return (
      <>
        <h1>State</h1>
        <div>
          <button onClick={this.handler}>Change State</button>
        </div>
      
        <div>{this.state.count}</div>
      </>
    )
  }
}

export default Component_1;