import './App.css';
import Child from './Child';
import Test2 from './Test2';
import React, {useState} from 'react';

function App() {
  const refRange = React.createRef();
  // const refF = React.createRef();
  const refC = React.createRef();
  const refDiv = React.createRef();

  const [s1, setS1] = useState(50);
  
  function changeHandler(e) {
    let a = e.target.value;
    setS1(a)
    console.log(a);
    refC.current.go();
  }

  function changeHandler2() {
    let elem = refRange.current;
    let div = refDiv.current;
    console.log(elem.value);
  }
  
  return (
    <>
      <div>
        <input type="range" onChange={changeHandler}/>
      </div>
      <div>
        <input type="range" ref={refRange}/>
      </div>
      <div ref = {refDiv}>Some Text</div>
      <div>
        <button onClick = {changeHandler2}>Push</button>
      </div>
      <Child p1={s1}/>
      <Test2 ref={refC}/>
    </>
  );
}

export default App;
