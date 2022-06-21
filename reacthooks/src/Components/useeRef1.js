import React, {useState, useRef} from 'react'

const useRef1 = () => {

    const [myNum, setMyNum] = useState(0)

    const getNumbox  = () =>{
        console.log("Hello Rashi");
    }

    const getTextBox = () =>{
        console.log("Love you Mehereen");
    }


  return (
    <>
    <h2>I Love Rashi Khanna</h2>
    <input  value={myNum} type="number" />
    <input value={myNum} type="text" />
    <h3>Value is : {myNum}</h3>

    <button onClick={()=>getNumbox()}>Rupees</button>
    <button onClick={()=>getTextBox()}>Dollars</button>
    </>
  )
}

export default useRef1