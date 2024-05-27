import React, { Component } from 'react'

// axios --> get and post 
import axios from 'axios' 

export class PostData extends Component {
 // we need to create a state property which will store thre list of data or post

   constructor(props) {
     super(props)
   
     this.state = {
        posts: []
     }
   }

    // componentDidMount() ---> this methods will executed when the component mount or render for the first time and it only exected once during components lifetime

    componentDidMount() {

       axios.get('https://jsonplaceholder.typicode.com/posts')

       // Promise  ---> Then and Catch Blocks 
       // axios is promise based library

     .then(response => {
 
        console.log(response);
        this.setState({posts: response.data})
     
     })
     .catch(error => {

        console.log(error)
     
     })
        

    }

    render() {

        const { posts } = this.state

    return (
      <div>
         <h1>List of User Data</h1>
         {
            posts.map(post => <div key={post.id}> <h2>Title:- </h2>{post.title} : null </div>)
         }
      </div>
    )
  }
}

export default PostData

//response, request 


