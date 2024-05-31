import React from 'react';
import { useState } from 'react';

function Component_2() {
  const [count, setCount] = useState(0);
  const [commentsArray, setCommentsArray] = useState([]);
  const myRef = React.createRef();
 
  function handler() {
    let currentCount = count;
    currentCount++;
    setCount(currentCount)
  }

  function addComment() {
    let comment = myRef.current.value;
    let comments = [...commentsArray, comment]; 
    setCommentsArray(comments);
    myRef.current.value = null;
  } 

  return (
    <>
      <h1>State</h1>
      <div>
        <button onClick={handler}>Change State</button>
      </div>
      <div>
          {count % 2 === 0 ? 'odd' : 'even'}
      </div>
      <div>{count}</div>

      <div>
          <textarea ref={myRef}></textarea>
        </div>
        <div>
          <button onClick={addComment}>Add Comment</button>
        </div>
        <div>
          <ul>{commentsArray.map((item, index) => <li key={index}>{item}</li>)}</ul>
        </div>
    </>
  )
}

export default Component_2;