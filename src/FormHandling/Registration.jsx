import React from 'react'

class Registration extends React.Component {

    constructor(props){
        super(props)
        console.log("First Const")
        this.state  = {
            name:"",
            email:"",
            mobile:""
        }
    }
    updateHandler = (event)=>{
        this.setState({  [event.target.name]:event.target.value })
    }
    submitHandler = (event)=>{
      event.preventDefault()
      console.log(this.state)
    }
  render() {
    return (
      <div>
        <h2>Registration Page</h2>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.submitHandler}>
            <label >User Name:</label>
            <input type="text" name="name" onChange={this.updateHandler} />  <br /> <br />
            <label >Email ID :::::</label>
            <input type="text" name="email" onChange={this.updateHandler} />  <br /> <br />
            <label >Mobile No:</label>
            <input type="text"name="mobile" onChange={this.updateHandler} />  <br /> <br />
            <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Registration