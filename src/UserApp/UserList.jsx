import React from 'react'

const UserList = (props) => {
  let selectedUser = (user)=>{
    //console.log(user.firstName)
    props.getUser(user);
  }
  return (
    <div>
      <h1>UserList</h1>
      {/*   <pre>{JSON.stringify(props.users)}</pre> */}
        <table className='table'>
          <thead>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Gender</th>
            </tr>
         
          </thead>
          <tbody>
          {
            props.users.map((user)=>{
              return <tr key={user.id} onMouseOver={selectedUser.bind(this,user)}>
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