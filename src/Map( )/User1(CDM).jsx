import React, { Component } from 'react'
import Axios from 'axios'
class Users extends Component {
    state;
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        Axios.get('https://dummyjson.com/users')
        .then((response)=>{
            console.log(response.data)
            this.setState({
                users:response.data.users
            })
        })
        .catch(()=>{})
    }
  render() {
    return (
      <div className='container'>
        <div className='row'>
        <div className='col-md-8'>
        <h1>User Component</h1>
        <pre>{JSON.stringify(this.state.users)}</pre>
       
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Home - City</th>
                    <th>Work - City</th>
                </tr>
            </thead>
            <tbody>
                    {
                        this.state.users.length > 0 ? <>
                        {
                            this.state.users.map((user)=>{
                                return <tr>
                                        <td>{user.id}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.age}</td>
                                        <td>{user.address.city}</td>
                                        <td>{user.company.address.city}</td>
                                       </tr>
                            })
                        }
                        </>:<h1>No Data</h1>
                    }
            </tbody>
        </table>
        </div>
        </div>
      </div>
    )
  }
}

export default Users