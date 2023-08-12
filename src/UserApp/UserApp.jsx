import React, {useState, useEffect } from 'react'
import UserList from './UserList'
import UserDetails from './UserDetails'
import Axios from 'axios'
const UserApp = () => {
   let [userData, setUserData]=useState({}) 
   let [user, setUser]  = useState({})

   let selectedUser=(user)=>{
    console.log(user)
    setUser(user)
   }
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
        <div className="container mt-5">
       {/*      <h2>User App</h2> */}
          {/*   <pre>{JSON.stringify(userData)}</pre>
            <pre>{JSON.stringify(user)}</pre> */}
            <div className="row">
                <div className="col-md-8">
                    {
                       Object.keys(userData).length >0 ? <>
                            <UserList getUser={selectedUser} users={userData.users}/>
                       </> :null
                    }
               
                </div>
                <div className="col-md-4">
                    {
                        Object.keys(user).length>0 ? <> <UserDetails   user={user} /></>:<h1>User Details</h1>
                    }
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserApp