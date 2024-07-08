import React, {Component} from 'react';

class DataLoader extends Component {
  constructor() {
    super();
    this.state = {
      info: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({info: data})
      })
  }
  
  render(){
    return(
      <div>
        <ul>
          {this.state.info.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
      </div>
    )
  }
}

export default DataLoader;