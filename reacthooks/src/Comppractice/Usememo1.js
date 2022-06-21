import React, {useMemo, useState} from 'react'
    

const Usememo1 = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const IncrementOne = () =>{
        setCounterOne(counterOne+1);

    }

    const IncrementTwo = () =>{
        setCounterTwo(counterTwo+1);
    }

    const isEven = useMemo(()=>{
        console.log("gvgvhgcgc")
        let i = 0;
        while(i<200000) i++;
        return counterOne%2==0;
    },[counterOne])

    

  return (
    <div>
        <button onClick={IncrementOne}>counterOne-{counterOne}</button>
        <br/>
        <span>{isEven()?"Even":"odd"}</span>
        <br/>
        <button onClick={IncrementTwo}>counterTwo-{counterTwo}</button>
    </div>
  )
}

export default Usememo1