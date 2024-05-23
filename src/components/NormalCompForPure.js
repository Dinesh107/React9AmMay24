import React, { Component } from 'react'

class NormalCompForPure extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
      }
    }

onIncrement = () => {

    this.setState({count: 0});
}

  render() {
    console.log("Normal Component Rendered method called");
    return (
      <div>
        <h1>Normal Component</h1>
        {this.state.count}
          <br/>
          <button onClick={this.onIncrement} >Click Me To Increment</button>

      </div>
    )
  }
}

export default NormalCompForPure

