import React, { useState, useMemo , useEffect,usecallback, useCallback} from 'react'

function Usecallback() {

    const [counter, setCounter] =useState(1);

    const result = useMemo(()=>{
        return factorial(counter);
}, [counter]);

const[name,setName] = useState("");



const displayName = useCallback(() =>{
    return name},[name])

  return (
    <div>
       <h1>
           Factorial of {counter} is : <span>{result}</span>
       </h1>
       <div>
           <button onClick={()=>setCounter(counter-1)}>Decrement</button>
           <button onClick={()=>setCounter(counter+1)}>Increment</button>
       </div>
       <div>
            <div><label htmlFor="">Enter Name</label></div>
            <input type="text" name="" id="" placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <hr></hr>
            <DisplayName displayName={displayName}></DisplayName>
        
        </div>
    </div>
  )
}

const DisplayName = ({displayName})=>{
    console.log("rendered");
    const [value, setValue] = useState("");
    useEffect(()=>{
     setValue(displayName());
     console.log('component rendered')
    },[displayName]);
    return  <p>{`My name is ${value}`}</p>
};

function factorial(n){
    let i = 0;
    while(i<2000)
    i++;
    if(n<0){
        return -1;
    }
    if(n===0){
        return 1
    }
    return n*factorial(n-1);
}

export default Usecallback