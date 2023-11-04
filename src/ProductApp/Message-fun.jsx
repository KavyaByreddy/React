import React, { useState } from 'react'

const Message = () => {
  let [msg, setMsg]=useState("Helloo")
/*   let [employee, setEmployee]=useState({})
  let [users, setUsers]=useState([])
  let [flag, setFlag]=useState(false); */
  return (
    <div>
      <h2>
        <h2>Message Component</h2>
        <pre>{JSON.stringify(msg)}</pre>
        <h3>Message:  {msg}</h3>
        <button></button>
      </h2>
    </div>
  )
}

export default Message