import React, { Component } from 'react'
import axios from 'axios'


class PostDataFromForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
       userId: '',
       title: '',
       body: ''
    }
  }
  changeHandler = (e) => {
    // we are going to call the setState method where the key is going to be a target 
    this.setState({ [e.target.name]: e.target.value})
  }
  submitHandler = (e) => {
     // preventDefault ---> to avoid page refresh
    e.preventDefault()
    console.log(this.state)

    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)

    // once the request completed either we get response or we we get an error 

    .then(response => {
        console.log(response)
 
    })
    .catch(error => {
        console.log(error)
    })

  }

  render() {
     const { userId, title, body } = this.state
    return (
      <div>
        <form action="" onSubmit={this.submitHandler} >
            <div>
                <input 
                type="text"  
                name="userId" 
                value={userId} 
                onChange={this.changeHandler} />
            </div>
            <div>
                <input 
                type="text"  
                name="title" 
                value={ title } 
                onChange={this.changeHandler} />
            </div>
            <div>
                <input 
                type="text"  
                name="body" 
                value={ body } 
                onChange={this.changeHandler} />
            </div>
            <button type='submit' >Submit</button>
        </form>
      </div>
    )
  }
}

export default PostDataFromForm

// we are going create a state properties and link back to the input elements

// we are going to add the onChange event hanlder to track the change in input values and keep them sync with state object


//https://jsonplaceholder.typicode.com/comments