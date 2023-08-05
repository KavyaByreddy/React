import React, { Component } from 'react'

class Message extends Component {
    state = { msg: "Hello" }
    gmHandler = () => {
        this.setState({ msg: "GM " })
    }
    gnHadler = () => {
        this.setState({ msg: "GN " })
    }
    render() {
        console.log("Render method")
        return (
            <div>
                <h1>Message Component</h1 >
                <h2>Message Value:{this.state.msg}</h2>
                <button onClick={this.gmHandler}>GM</button>
                <button onClick={this.gnHadler}>GN</button>
            </div>
        )
    }
}

export default Message