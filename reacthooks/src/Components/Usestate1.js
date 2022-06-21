import React, { useState } from 'react'

const Usestate1 = () => {

    const [name, setname] = useState("Veeresh Biradar")

    const changeName = () => {

        let myName = name;

        if (myName === "Veeresh Biradar"){
            setname("Sandhya Biradar");
        }
        else{
            setname("Veeresh Biradar")
        }
    }

    return (
        <>
            <h1>Hey {name} You are great public speaker</h1>
            <button className='btn' onClick={changeName}>Click Here</button>
        </>
    )
}

export default Usestate1