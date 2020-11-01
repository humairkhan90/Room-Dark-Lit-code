import React, { useState } from 'react';
import './Room.css';

function Room() {

  let [isLit, setLit] = useState (false);
  let [age, setAge] = useState (0);

function updateLit() {
  setLit(!isLit);
}  

function updateage() {
  setAge(++age);
}

  return (
<div classname = {'Room ${The room is {isLit? "Dark" : "Lit"}'} >
  The room is {isLit? "Dark" : "Lit"}
  <br/>
  <button onClick={updateLit}> Toggle Switch </button>
  Age : {age}
  <br/>
  <button onClick={updateage}> Age Button </button>
</div>
  )
}

export default Room;