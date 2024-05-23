import React, {useState} from 'react'
import {MemoizedChild} from './Child'

const Parent = () => {

   const [count, setCount] = useState(0)

   const [name, setName] = useState('Student')

   console.log('Parent Render')

   return (
      <div>
         <h1>Parent Component</h1>
         <button onClick={() => setCount(count + 1)}>Increment</button>
         <button onClick={() => setName('Students Welcome To React Class')} >Change name</button>
         <h2>{count}</h2>
         <MemoizedChild name={name} />
      </div>
   )
}

export default Parent