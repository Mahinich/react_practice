import React from 'react';

class Component_1 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      commentsArray: []
    };
    this.myRef = React.createRef();
  }
  handler = () => {
    let currentCount = this.state.count;
    currentCount++;
    this.setState({
      count: currentCount
    })
  };

  addComment = () => {
    let comment = this.myRef.current.value;
    let comments = this.state.commentsArray;
    comments.push(comment)
    this.setState({
      commentsArray: comments
    })
    this.myRef.current.value = '';
  }
  
  render() {
    return (
      <>
        <h1>State</h1>
        <div>
          <button onClick={this.handler}>Change State</button>
        </div>
        <div>
          {this.state.count % 2 === 0 ? 'odd' : 'even'}
        </div>
        <div>{this.state.count}</div>
        <div>
          <textarea ref={this.myRef}></textarea>
        </div>
        <div>
          <button onClick={this.addComment}>Add Comment</button>
        </div>
        <div>
          <ul>{this.state.commentsArray.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
      </>
    )
  }
}

export default Component_1;