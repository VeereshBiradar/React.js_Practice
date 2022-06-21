import React, {useState,useRef, useEffect} from 'react'

const Useref = () => {

    // 1. DOM Reference 
    // 2. useRef is for storing the previous state 
    // 3. hold mutable value prevent re-render of component

    const [name, setName] = useState("");
    const [counter, setCounter] = useState(0)
    const inputEl = useRef("");
    const previousCounterRef = useRef("");

    // console.log(inputEl) // we get a object

    const resetInput =() =>{
        setName("");
        inputEl.current.focus();
        // console.log(inputEl.current.value);
    }
   
    useEffect (()=>{
      previousCounterRef.current = counter;
    }, [counter])

  return (
   <div>
       <div>
           <input ref={inputEl} type="text" name="name" id="name"  value={name} onChange={(e) => setName(e.target.value)}/>
           {typeof previousCounterRef.current !== "undefined" && (<h2>Previous counter : {previousCounterRef.current}</h2>)}
           <button onClick={resetInput}>Reset</button>
       </div>
       <div>My name is {name}</div>
       <div>
           <h1>Random Counter : {counter}</h1>
           <button onClick={(e)=> setCounter(Math.ceil(Math.random() * 100))}>Generate Number</button>
       </div>
   </div>
  )
}

export default Useref