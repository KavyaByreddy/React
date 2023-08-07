import React, { Component } from 'react'
import employees from './empData'
class Employee extends Component {
    render() {
        return (
            <div>
                <h1>Employee Comp</h1>
                <pre>{JSON.stringify(employees)}</pre>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((emp, index) => {
                                return <tr key={index}>
                                    <td>{emp.id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.sal}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Employee