import React, { Component } from 'react'


class StudentsWelcomeConditionalIfElse extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           studentLoggedIn: true
        }
      }
  render() {
   
    return (
         this.state.studentLoggedIn ? <div><h1>Welcome Murugan</h1></div> : <div><h1>Welcome Students</h1></div>
    )

    // let info

    // if(this.state.studentLoggedIn) {
   
    //     info = <div><h1>Welcome Ganesh</h1></div>

    // //    return (
    // //         //  <div>
    // //         //     <h1>Welcome Ganesh</h1>
    // //         //  </div>

            
    // //    )
    // } else {

    //     info = <div><h3>Welcome Students</h3></div>

    //    // return(
    //         // <div>
    //         //     <h3>Welcome Students</h3>
    //         // </div>
    //    // )
    // }
  
    //  return <div>{info}</div>

  }

}
export default StudentsWelcomeConditionalIfElse

