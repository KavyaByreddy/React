import React, { Component } from 'react'

class Salary extends Component {
    constructor(props) {
        super(props)
        this.state = { emp_Sal: 45000 }
    }
    updateSalHanlder = (value) => {
        this.setState({
            emp_Sal: 45000 + value
        })
    }
    render() {
        return (
            <div>
                <h1>Salary Component</h1>
                <pre>{JSON.stringify(this.state)}</pre>
                <h3>Salary:{this.state.emp_Sal}</h3>
                <button onClick={this.updateSalHanlder.bind(this, 50000)}>Hike 50k</button>
                <button onClick={this.updateSalHanlder.bind(this, 100000)}>Hike 100k</button>
                <button onClick={this.updateSalHanlder.bind(this, 1000)}>Hike 1k</button>
            </div>
        )
    }
}

export default Salary