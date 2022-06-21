import React, {useState} from 'react'
import Ccomponent from './Ccomponent'

const UseState = () => {

    const [flag, setFlag] = useState(true)
  return (
    <div>
        <div>
            <button onClick={()=>setFlag(!flag)}>Toggle Class Component</button>
        </div>
        {flag ? <Ccomponent/> :""}
    </div>
  )
}

export default UseState