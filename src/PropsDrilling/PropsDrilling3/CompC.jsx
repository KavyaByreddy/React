import React, { Component } from 'react'
import CompD from './CompD'
class CompC extends Component {
    render() {
        return (
            <div>
                <h1>CompC</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <hr />
                <CompD name3={this.props.name2} />
            </div>
        )
    }
}

export default CompC
