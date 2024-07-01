import './App.css';
import React from 'react';

function App() {
  const title_1 = React.createElement('h1', {
    color:'green',
    style: {
      color: 'green',
      fontSize: '10px',
      },
    id: 'specific-id',
    className: 'new-class'
  }, 'Header Text 1');
  const title_2 = React.createElement('h2', {}, 'Header Text 2');
  const cE = React.createElement;
  const span = cE('span', {}, 'this is a span')
  const prgrph = cE('p', {style:{fontStyle: 'italic'}}, span)
  
  return (
   <>
    <React.Fragment>Text </React.Fragment>
    {title_1}
    <div>
      {title_2}
    </div>
    <div>
      {cE('input', {type:'checkbox'})}
      {prgrph}
    </div>
   </>
  );
}

export default App;
