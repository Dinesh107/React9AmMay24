import React from "react";

class Information extends React.Component {

    constructor() {

         super() 

         this.state = {
   
              information:'Welcome To React Class'

         }
    }

    changeInfo() {
    
        this.setState({

            information: 'Thank you for attending the react class'
        
        })

    }

    render() {

        return (
        <div>
           <h1>{this.state.information}</h1>
           <button onClick={() => this.changeInfo()}>Click To Change State</button>
        </div>
         
        )
    }
}

// new

export default Information;


