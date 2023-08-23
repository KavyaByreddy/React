import React from 'react'

const Message = () => {
   let  [msg,setMsg]=React.useState("Hello")
    let [qty,setQty]=React.useState(1)
   let  [users,setUsers]=React.useState(["Rahul","Sonia","Priyanka"])
    let [employee, setEmployee]=React.useState({})
    
    let gmHandler = ()=>{}
    let gnHandler = ()=>{}
  return (
    <div className='container'>
        <h2>Message Component</h2>
        <pre>Message:{msg}</pre>

        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
        <pre>{qty}</pre>
        <pre>{users}</pre>
        <pre>{JSON.stringify(employee)}</pre>
    </div>
  )
}

export default Message1