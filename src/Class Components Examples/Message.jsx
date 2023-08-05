import React from 'react'

class Message extends React.Component {
    msg = "GM"
    price = 400;
    render() {
        console.log("First Render method")
        return <div>
            <h1>Message Component</h1>
            <h3>Wish Message: {this.msg}</h3>
            <h3>Price: {this.price}</h3>
        </div>
    }
}

export default Message
