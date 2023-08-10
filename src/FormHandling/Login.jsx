import React, { Component } from 'react'

class Login extends Component {
    state={
        email:"",
        password:""
    }
    emailHandler = (event)=>{
      /*   console.log(event)
        console.log(event.target)
        console.log(event.target.value) */
        this.setState({email:event.target.value})
    }
    passwordHandler = (event)=>{
        this.setState({password:event.target.value})
    }
    submitHandler=(event)=>{
        event.preventDefault()
        console.log(this.state)
    }
  render() {
    return (
      <div>
        <h1>Login Component</h1>
        <hr />
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.submitHandler}>
        <label >Emaild Id:</label>
        <input type="text" onChange={this.emailHandler} /> <br /><br />
           <label >Password </label>
        <input type="text" onChange={this.passwordHandler}/> <br /><br />
        <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default Login