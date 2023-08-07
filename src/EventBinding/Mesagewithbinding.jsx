import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props)
        console.log("First Const")
        this.state = {
            msg: "Hellooooooo"
        }
    }
    updateHandler = (value) => {
        //this.setState({ msg: "Hello,Rajni" })
        this.setState({ msg: value })
    }
    render() {
        console.log("Second - render method")
        return (
            <div>
                <h1>Message Component</h1>
                <h2>Message Value:{this.state.msg}</h2>
                <button onClick={this.updateHandler.bind(this, "Good Morning!")}>GM</button>
                <button onClick={this.updateHandler.bind(this, "Good Afternoon")}>GA</button>
                <button onClick={this.updateHandler.bind(this, "Good Evnening")}>GE</button>
                <button onClick={this.updateHandler.bind(this, "Good Night")}>GN</button>
            </div>
        )
    }
}

export default Message