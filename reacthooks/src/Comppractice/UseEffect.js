import React from 'react'
import { useState, useEffect } from 'react';

function UseEffect() {

  const [time, setTime] = useState(new Date().toString());
  const [message, setMessage] = useState("Functional Component")

  useEffect(() => {
    console.log("Componet mounted and updated");
    const interval = setInterval(showDate, 5000);

    return()=>{
      console.log("cleaning of interval");
      clearInterval(interval)
    }
  },[message])


  const showDate = () => {
    setTime(new Date().toString()
    )
  }

  return (
    <>
      <h3>{time}</h3>
      <button onClick={showDate}>Showdate</button>
      <div>{message}</div>
      <button onClick={() => setMessage("Changed functional component")}>Change message</button>
    </>
  )
}

export default UseEffect