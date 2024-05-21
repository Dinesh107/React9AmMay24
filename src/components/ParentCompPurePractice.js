import React, { Component } from 'react'
import NormalComponentsForPurePract from './NormalComponentsForPurePract'
import PureComponentsPractice from './PureComponentsPractice'

class ParentCompPurePractice extends Component {
 
  constructor(props) {
    super(props)
  
    this.state = {
       customer: 'Ganesh'
    }
  }

  componentDidMount () {
     
      setInterval(() => {

        this.setState({
            customer: 'Ganesh'
        })
     
     }, 4000)

  }

  render() {
 
     console.log('------ParentComp Rendering------')

    return (
      <div>
        <h1>ParentCompPurePractice</h1>
        <NormalComponentsForPurePract customer={this.state.customer} >

        </NormalComponentsForPurePract>
        <PureComponentsPractice customer={this.state.customer} >

        </PureComponentsPractice>
      </div>
    )
  }
}

export default ParentCompPurePractice

