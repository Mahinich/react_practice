import React from 'react';
import { useState, useEffect } from "react";

function Test2(props) {
  console.log('set state');
  console.log('render1')
  let [s1, setS1] = useState(props.arg)

const buttonHandler = () => {
    console.log('handler');
    let val = s1;
    val += 1;
    setS1(val);
  }

  useEffect(() => {
    console.log('use effect');
  })
  
  return(
    <>
        {console.log('render2')}
        <div>
          <button onClick={buttonHandler}>Push</button>
        </div>
        <div>{s1}</div>
      </>
  )
}

export {Test2};