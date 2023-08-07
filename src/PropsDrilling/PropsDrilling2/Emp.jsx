import React, { Component } from 'react'

class Emp extends Component {
    render() {
        return (
            <div>
                <h2>Employee Component</h2>
                <pre>{JSON.stringify(this.props)}</pre>

                <h3>Emp Name:{this.props.name}</h3>
                <h3>Emp Loc:{this.props.loc[1]}</h3>
                <h3>Emp Sal:{this.props.details.sal}</h3>

            </div>
        )
    }
}

export default Emp