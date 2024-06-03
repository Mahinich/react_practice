import React from 'react';

class Test1 extends React.Component {

  constructor(props) {
    console.clear();
    console.log('constructor')
    console.log(props)
    super();
    this.state = {
      s1: 0
    }
  }
  
  buttonHandler = () => {
    let val = this.state.s1;
    val += 1;
    this.setState({s1: val});
  }

  static getDerivedStateFromProps(props, state) {
    console.log('get derived state');
    return ({s1: props.arg});
  }
  
  componentDidMount() {
    console.log('component did mount');
  }

  componentDidUpdate() {
    console.log('component did update');
  }
  
  render() {
    console.log('render1');
    return(
      <>
        {console.log('render2')}
        <div>
          <button onClick={this.buttonHandler}>Push</button>
        </div>
        <div>{this.state.s1}</div>
      </>
    )
  }
}

export {Test1};