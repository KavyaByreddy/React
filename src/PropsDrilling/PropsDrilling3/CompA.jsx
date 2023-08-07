import React, { Component } from 'react'
import CompB from './CompB'
class CompA extends Component {
    ename = "Rahul"
    render() {
        return (
            <div>
                <h1>CompA</h1>
                <pre>Employee Name:{this.ename}</pre>
                <hr />
                <CompB name1={this.ename} />
            </div>
        )
    }
}

export default CompA