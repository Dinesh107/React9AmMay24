import React, { Component } from 'react'

class NormalComponentsForPurePract extends Component {
  render() {
    console.log('------NormalComp Rendering------')
    return (
      <div>
        <h1>
        Normal Components For Pure Pract 
            {this.props.customer}
        </h1>
      </div>
    )
  }
}

export default NormalComponentsForPurePract