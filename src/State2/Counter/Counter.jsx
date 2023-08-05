import React, { Component } from 'react'

class Counter extends Component {
    state = {
        counter: 1
    }
    incrHandler = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    decrHandler = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    render() {
        console.log("Second render method")
        return (
            <div>
                <h1>Counter Example</h1>
                <pre>{JSON.stringify(this.state)}</pre>
                <h3>Counter Value:{this.state.counter}</h3>
                <button onClick={this.decrHandler}>DECR</button>
                <button onClick={this.incrHandler}>INCR</button>
            </div>
        )
    }
}

export default Counter
