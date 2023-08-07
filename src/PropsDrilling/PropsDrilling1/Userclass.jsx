import React, { Component } from 'react'
import Emp from './Emp'
class User extends Component {
    u_Id = 101;
    u_Name = "Priyanka"
    u_Avail = true;
    u_Loc = ['New Delhi', "Amethi"]
    u_Details = { sal: 65000, email: 'priyanka@gmail.com' }
    render() {
        return (
            <div>
                <h2>User Component</h2>
                <hr />
                <Emp id={this.u_Id} name={this.u_Name} avail={this.u_Avail} loc={this.u_Loc} details={this.u_Details} />
            </div>
        )
    }
}

export default User
