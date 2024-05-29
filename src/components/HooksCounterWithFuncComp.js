import React, {useState} from 'react'

function HooksCounterWithFuncComp() {

 // hooks are just simple function 
 
  // array destructuring 
  const [count, setCount] = useState(0)   // return going to return pair of values   
  
  // this hook or functions which accepts a arguments which is initial value of state property and returns current value of state property and method that is capable of updating that state property.

  return (
    <div>
        <button onClick={() => setCount(count + 1)} >Count{count}</button>
    </div>
  )
}

export default HooksCounterWithFuncComp