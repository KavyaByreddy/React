import React, { Component } from 'react'

export class Digital extends Component {
  state={
    ct:new Date().toLocaleTimeString()
  }
  timer;
  componentDidMount(){
  this.timer = setInterval(()=>{
        this.setState({ct:new Date().toLocaleTimeString()})
    },1000)
    
  }
  componentWillUnmount(){
    console.log("ummounting time")
    clearInterval(this.timer)
  }
  render() {
    return (
      <div>
        <h2>Digital Clock</h2>
        <pre>{JSON.stringify(this.state)}</pre>
        <h3>Time:{this.state.ct}</h3>
      </div>
    )
  }
}

export default Digital