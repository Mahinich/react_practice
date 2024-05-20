import React from 'react';
import './App.css';
import {useState} from 'react';

function App() {
  let textInput = React.createRef();
  let textOut = React.createRef();
  let elem = document.querySelector('.test');
  
  const[output, SetOutput] = useState('test text');
  
  function f1() {
    console.log('function f1');
    console.log(textInput);
  }

  function f2(arg) {
    console.log(`Dbl click from {f2} ${arg}`);
  }

  function f3() {
    console.log('move');
  }
  function showInput(e)  {
    console.log(e.target.value);
    console.log(textInput.current.value);
    textOut.current.textContent = textInput.current.value;
    SetOutput(textInput.current.value);
  }
  
  return (
   <>
    <h1>Події</h1>
    <section>
      <h2>Button_1</h2>
      <button onClick={f1} onDoubleClick={()=> f2('asd')}>Push</button>

      <h2>Mouse Move + DblCLick</h2>
      <div className='test' onDoubleClick={()=> f2('qwe')} onMouseMove={f3}></div>

      <h2>Інпут</h2>
      <input className='input' type="text" onInput={showInput} ref={textInput} defaultValue='hi'/>
      <div ref={textOut}></div>

      <h3>{output}</h3>

    </section>
   </>
  );
}

export default App;
