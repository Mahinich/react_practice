import React from 'react';

class Homework1 extends React.Component{
  constructor(props) {
    console.log(props)
    super();
    this.state = {
      s1: props.p1
    }
    this.s2 = 201;
  }

  componentDidMount() {
      let s1Updated = this.state.s1 + 5;
      this.setState({s1: s1Updated});
      this.s2 += 2.5;
  }

  buttonHandler = () => {
    let s2Updated = this.state.s1 + 50;
    this.setState({s1: s2Updated});
    this.s2 += 50;
  }

  render() {
    return(
      <>
        <div>{this.state.s1}</div>
        <div>{this.s2}</div>
        <button onClick={this.buttonHandler}>Push</button>
      </>
    )
  }
}

export default Homework1;