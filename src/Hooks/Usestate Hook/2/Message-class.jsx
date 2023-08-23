import React, { Component } from 'react'

class Message extends Component {

    constructor(props){
        super(props)
        this.state = {
            msg:"Hello"
        }
    }
    gmHandler = ()=>{
        this.setState({msg:"Hello,GM"})
    }
    gnHandler = ()=>{
           this.setState({msg:"Hello,GN"})
    }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <h1>Message Component</h1>
        <h2>Message:{this.state.msg}</h2>
        <button onClick={this.gmHandler}>GM</button>
        <button onClick={this.gnHandler}>GN</button>
        
      </div>
    )
  }
}

export default Message