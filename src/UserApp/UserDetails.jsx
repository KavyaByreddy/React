import React from 'react'

const UserDetails = (props) => {
  let {user}=props
  return (
    <div>
        <h2>UserDetails</h2>
     {/*    <pre>{JSON.stringify(props.user)}</pre> */}
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <img src={user.image} alt="" width={100} />
                </div>
                <div className="card-body">
                  <ul className='list-group'>
                    <li className='list-group-item'>{user.firstName}</li>
                    <li className='list-group-item'>{user.hair.color}</li>
                    <li className='list-group-item'>{user.address.city}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserDetails