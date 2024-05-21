import React, { PureComponent } from 'react'

class PureComponentsPractice extends PureComponent {
  render() {

    console.log('------PureComp Rendering------')

    return (
      <div>
        <h1>Pure Components Practice</h1>
        {this.props.customer}
      </div>
    )
  }
}

export default PureComponentsPractice