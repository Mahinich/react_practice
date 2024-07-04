import './App.css';
import React, {useState} from 'react';


function App() {

  const h1 = React.createElement('h1', {}, 'unit_08.');
  const h2 = React.createElement('h2', {style:{color: 'orange'}}, 'header 2');
  const p = React.createElement('p', {style: {color: 'red'}}, 'this is p');
  const input = React.createElement('input', {defaultValue: '55'});
  const p1 = React.createElement('p',{}, 'hi');
  const p2 = React.createElement('p',{}, 'world');
  const div = React.createElement('div', {className: 'text-grey'}, p1, p2)
  
  let [list, setList] = useState([]);
  const inpRef = React.createRef();
  const inp = React.createElement('input', {ref: inpRef});
  const btn = React.createElement('button', {
    onClick: () => {
      setList([...list, inpRef.current.value]);
      inpRef.current.value = '';
    }
  }, 'push')
  
  return (
   <>
    <React.Fragment>
      {h1}
      {h2}
      {p}
      {input}
      {div}
      {inp}
      {btn}

      <ul>
        {list.map(item => <li key={item}>{`${item} `}</li>)}
      </ul>
    </React.Fragment>
   </>
  );
}

export default App;
