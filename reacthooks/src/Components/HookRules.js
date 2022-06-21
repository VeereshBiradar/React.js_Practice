//1.Always write it inside the function of functional component 
//2. Component name must be in the PascalCase (First letter should be in upper case)
//3. we can directly import or we can directly writ it using React.hookName
//4. Don't call hooks inside the loops condition or nested functions

import React from 'react'

const HookRules = () => {

    const [first, setfirst] = useState("Priya")
  return (
    <>
    <h1>{first}</h1>
    </>
  )
}

export default HookRules