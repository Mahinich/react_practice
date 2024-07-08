import React, {Component} from 'react';

export default class Button extends Component {
  constructor() {
    super();
    this.state = {
      buttonText: 'Push'
    }
  }

  handleButton = () => this.setState({buttonText: 'Button has been pushed'})
  
  render() {
    return(
      <button onClick = {this.handleButton}>{this.state.buttonText}</button>
    )
  }
}