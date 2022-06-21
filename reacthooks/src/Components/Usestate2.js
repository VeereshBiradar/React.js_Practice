import React, {useState} from 'react'

const Usestate2 = () => {

//     const [count, setCount] = useState(0)


//   return (
//     <>
//     <h1>You clicked {count} times</h1>
//     <button onClick={ ()=>{setCount(count+1)}}>Click</button>
//     </>
//   )

    const [color, setColor] = useState("red")

    return(
        <>
        <h1>My faviourate color is {color}!</h1>

        <button type='button' onClick={()=>setColor('blue')}>Blue</button>
        
        <button type='button' onClick={()=>setColor('green')}>Green</button>
        
        <button type='button' onClick={()=>setColor('orange')}>Orange</button>
        
        <button type='button' onClick={()=>setColor('yellow')}>Yellow</button>

        </>
    )

}

export default Usestate2