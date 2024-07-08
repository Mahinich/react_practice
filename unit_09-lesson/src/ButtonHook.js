import React, { useState } from "react";

export default function ButtonHook() {

  let [buttonText, setButtonText] = useState('Push again'); 
  
  return(
    <button onClick = {() => setButtonText('Pushed it again')}>{buttonText}</button>
  );
}