import React, { useState } from 'react'

const Message = () => {
  let [msg, setMsg]=useState("Helloo")
  
  let gnHandler  = ()=>{
    setMsg('GN')
  }
  return (
    <div>
      <h2>
        <h2>Message Component</h2>
        <pre>{JSON.stringify(msg)}</pre>
        <h3>Message:  {msg}</h3>
        <button onClick={ ()=>{ setMsg("GM")}}>GM</button>
        <button onClick={gnHandler}>GN</button>
      </h2>
    </div>
  )
}

export default Message