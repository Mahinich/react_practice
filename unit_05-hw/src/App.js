import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  const [st1, setSt1] = useState('');
  let [st2, setSt2] = useState(0);
  let [st3, setSt3] = useState(null);
  let [st4, setSt4] = useState(0);
  const [st5, setSt5] = useState(null);
  const [st6, setSt6] = useState(null);
  const [st7, setSt7] = useState(null);
  let [st8, setSt8] = useState('');
  const [st9, setSt9] = useState(null);
  const [st10, setSt10] = useState([]);

  const refTask1 = React.createRef();
  const refTask7 = React.createRef();
  const refTask10 = React.createRef();

  function task1() {
    let receivedData = refTask1.current.value;
    setSt1(receivedData);
    refTask1.current.value = '';
  }
  function task2() {
    setSt2(++st2);
  }
  function task3(e) {
    setSt3(e.target.value);
  }
  function task4() {
    setSt4(++st4);
  }
  function task5(e) {
    let value = e.target.checked ? e.target.value : 0; 
    setSt5(value)
  }
  function task6(e) {
    setSt6(e.target.value)
  }
  function task7() {
    function randomInt(a, b) {
      return Math.floor(Math.random() * (a - b + 1)) + b;
    }
    let bg = (`rgb(${randomInt(255, 0)}, ${randomInt(255, 0)}, ${randomInt(255, 0)})`);
    setSt7(bg);
    refTask7.current.style.backgroundColor = bg;
  }
  function task8(e) {
    if (/\d/.test(e.key)) {
      setSt8(st8 + 1)
    } else {
      setSt8(st8 + 0)
    }
  }
  function task9(e) {
    setSt9(e.target.value)
  }
  function task10() {
    setSt10([...st10, ` ${refTask10.current.value}`]);
    refTask10.current.value = null;
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <input type="text" ref={refTask1}/>
        <button className="task-1" onClick={task1}>Push</button>
        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3}/>
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" defaultValue="55" onChange={task5}/>
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={refTask7}></div>
        <button className="task-7" onClick={task7}>Color</button>
        <div>{st7}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyDown={task8}></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={refTask10}></input>
        <button className="task-10" onClick={task10}>Push</button>
        <div>{st10}</div>
      </section>
    </>
  );
}

export default App;