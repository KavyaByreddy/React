import React, { Fragment } from 'react'
class Message1 extends React.Component {
    msg = "Hello"
    gmHandler = () => {
        this.msg = "Hello, GM "
        console.log(this.msg)
        this.forceUpdate()
    }
    gnHandler = () => {
        this.msg = "Hello, GN "
        console.log(this.msg)
        this.forceUpdate()
    }
    render() {
        console.log("render method")
        return <Fragment>
            <h1>Message Value:{this.msg}</h1>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gnHandler}>GN</button>
        </Fragment>
    }

}
export default Message1