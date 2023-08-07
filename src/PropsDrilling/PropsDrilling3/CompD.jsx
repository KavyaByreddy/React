import React, { Component } from 'react'

class CompD extends Component {
    render() {
        return (
            <div>
                <h1>CompD</h1>
                <pre>{JSON.stringify(this.props)}</pre>

                <h2>Employee Name:{this.props.name3}</h2>
            </div>
        )
    }
}

export default CompD
