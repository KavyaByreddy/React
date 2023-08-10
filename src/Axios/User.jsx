import React, { Component } from 'react'
import Axios from 'axios'
 class User extends Component {
  state = {
    users:[]
  }
  getUserDataHandler =()=>{
    //invoking api
    Axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        console.log(response)
        //console.log(response.data)
        this.setState({users:response.data})
    })
    .catch((err)=>{})
  }  
  render() {
    return (
      <div>
        <h1>User Component</h1>
        <button onClick={this.getUserDataHandler}>Click</button>
        <pre>{JSON.stringify(this.state)}</pre>
      </div>
    )
  }
}

export default User