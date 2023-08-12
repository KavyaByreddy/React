import React from 'react'

const UserList = (props) => {
  return (
    <div>
      <h1>UserList</h1>
        <pre>{JSON.stringify(props.users)}</pre>
        <table className='table'>
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Gender</th>
          </thead>
          <tbody>
          {
            props.users.map((user)=>{
              return <tr>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.gender}</td>
              </tr>
            })
          }
          </tbody>
        </table>
        
    </div>
  )
}

export default UserList
