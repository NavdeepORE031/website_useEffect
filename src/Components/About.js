import React from 'react'
import { useRef } from 'react';

const About = () => {
  const inputField = useRef();

  const clickHandler = () => {
    console.log("this is current value----", inputField.current.value);
      inputField.current.style.border="2px solid red";
      console.log(inputField.current);
  }

  return (
    <>
      <div>About</div>
      <input ref={inputField} />
      <button onClick={clickHandler}>Submit</button>
    </>
  )
}

export default About