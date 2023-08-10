import React, { Component } from 'react'
import Axios from 'axios'
class Users extends Component {
    constructor(props){
        super(props)
        console.log("First Const")
        this.state ={
            users:[]
        }
    }
    componentDidMount(){
        console.log("After Render method")
        Axios.get('https://jsonplaceholder.typicode.com/users')
             .then((response)=>{
                console.log(response)
                this.setState({
                    users:response.data
                })
             })
             .catch(()=>{})
    }
  render() {
    console.log("Second Render")
    return (
      <div>
        <h2>User Component</h2>
        <pre>{JSON.stringify(this.state.users)}</pre>
      </div>
    )
  }
}

export default Users