import React, { useEffect, useState } from 'react'

function Useeffect1() {

    const [count, setCount] = useState(10);
    const [messge, setMessage] = useState("Functional component");

    useEffect(()=>{
        console.log("useEffect is launched")
    }, [messge])

    return (
        <>
            <h1>Count : {count} </h1>
            <h1>Message : {messge}</h1>

            <button onClick={() => setCount(count + 1)}>Count</button>
            <button onClick={() => setMessage('Changed to functional compnent')}>Change message</button>
        </>
    )
}

export default Useeffect1