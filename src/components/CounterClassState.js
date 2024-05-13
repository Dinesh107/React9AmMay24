import React, { Component } from 'react'

class CounterClassState extends Component {

  constructor(props) {
    
    super(props)

    this.state = {
      count: 0
    }


  }  

  increaseTheValue() {

     this.setState({count: this.state.count + 1
        
     })
     console.log(this.state.count);

  }

  render() {
    return ( 
        <div>
        <div><h1>Count - {this.state.count}</h1></div>
        <button onClick={() => this.increaseTheValue()} >Click to increase</button>
        </div>
    )
  }
}

export default CounterClassState

