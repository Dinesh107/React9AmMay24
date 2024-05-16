import React from 'react'
import './style.css'

function StylePracticeInReact(props) {

    let className = props.heading1 ? 'heading1' : ''

  return (
    <div><h1 className= {`${className} fontSize`} >StylePracticeInReact</h1></div>
  )
}

export default StylePracticeInReact