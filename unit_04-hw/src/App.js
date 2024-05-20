import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  let count4 = 0;

  let elem = React.createRef();
  let task5CheckBox = React.createRef();
  let task5DivText = React.createRef();
  let task6Select = React.createRef();
  let task7BG = React.createRef();

  const [out6Value, SetOut6Value] = useState('');
  const [task7value_1, SetTask7Value_1] = useState(0);
  const [task7value_2, SetTask7Value_2] = useState(0);
  const [task7value_3, SetTask7Value_3] = useState(0);
  
  function randomInt(a, b) {
    return Math.floor(Math.random() * (a - b + 1) + b);
  }
  

  function task1() {
    console.log('task2');
  }
  function task2() {
    elem.current.classList.add('active');
  }
  function task3(event) {
    let inputText = event.target.value;
    console.log(inputText);
  }
  function task4() {
    ++count4;
    console.log(count4);
  }
  function task5() {
    task5DivText.current.textContent = task5CheckBox.current.checked ? task5CheckBox.current.value : 0;
  }
  function task6() {
    let selectValue = task6Select.current.value;
    SetOut6Value(selectValue);
  }
  function task7() {
    SetTask7Value_1(randomInt(0, 255));
    SetTask7Value_2(randomInt(0, 255));
    SetTask7Value_3(randomInt(0, 255));
    task7BG.current.style.backgroundColor = `rgb(${task7value_1}, ${task7value_2}, ${task7value_3})`;
  }
  function task8(e) {
    console.log(e.key);
  }
  function task9() {

  }
  let ar10 = [5, 6, 7];
  function task10() {

  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2} ref={elem}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3}/>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" defaultValue="55" onChange={task5} ref={task5CheckBox}/>
        <div className="out-5" ref={task5DivText}></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={task6Select}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6">{out6Value}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={task7BG}></div>
        <button className="task-7" onClick={task7}>Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyDown={task8}></input>
        <div className="out-8"></div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9"></input>
        <div className="out-9"></div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10"></input>
        <button className="task-10">Push</button>
      </section>
    </>
  );
}

export default App;
