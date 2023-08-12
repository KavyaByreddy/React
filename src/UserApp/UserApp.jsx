import React, {useState, useEffect } from 'react'
import UserList from './UserList'
import UserDetails from './UserDetails'
import Axios from 'axios'
const UserApp = () => {
   let [userData, setUserData]=useState({}) 
  useEffect(()=>{
    Axios.get('https://dummyjson.com/users')
    .then((response)=>{
        console.log(response.data)
        setUserData(response.data)
    })
    .catch(()=>{})
  },[])
  return (
    <div>
        <div className="container">
            <h2>User App</h2>
            <pre>{JSON.stringify(userData)}</pre>
            <div className="row">
                <div className="col-md-8">
                    {
                       Object.keys(userData).length >0 ? <>
                            <UserList users={userData.users}/>
                       </> :null
                    }
               
                </div>
                <div className="col-md-4">
                    <UserDetails/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserApp