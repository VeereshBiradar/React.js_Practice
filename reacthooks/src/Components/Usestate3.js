import React, {useState} from 'react'

const Usestate3 = () => {

    const [car, setCar] = useState({
        brand : "Ford",
        model : "Mustang",
        year : 1964,
        color : "red"
    })

    const updateColor = () =>{
        setCar({...car, color:'blue'});
    }

  return (
    <div>
        <h1>My car brand name is {car.brand}</h1>
        <p>It is a {car.color} {car.model} from {car.year} </p>
        <button type='button' onClick={updateColor}>update</button>
    </div>
  )
}

export default Usestate3