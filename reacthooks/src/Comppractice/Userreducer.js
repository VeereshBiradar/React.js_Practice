import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) =>{
  if(action.type === 'INCREMENT'){
     return state+1;
  }
  if(action.type === 'Decrement'){
    return state-1;
  }
    return state;
}

const Userreducer = () => {

  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <>
    <div>{state}</div>
    <button type='button' onClick={()=>dispatch({type: "INCREMENT"})}>increment</button>

    <button type='button' onClick={()=>dispatch({type: "Decrement"})}>decrement</button>
    </>
  
  )
}

export default Userreducer