import React, { PureComponent } from 'react'

class PureComponentDemo extends PureComponent {

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
    console.log("Pure Component Rendered method called");
    return (
      <div>
        <h1>Pure Normal Component</h1>
        {this.state.count}
          <br/>
          <button onClick={this.onIncrement} >Click Me To Increment</button>

      </div>
    )
  }
}

export default PureComponentDemo