import React from 'react'

const Message = () => {
   let  [msg,setMsg]=React.useState("Hello");
    
  return (
    <div className='container'>
        <h2>Message Component</h2>
        <pre>Message:{msg}</pre>

        <button onClick={()=>{
            setMsg("Good Morning")
        }}>GN</button>
       <button onClick={()=>{
        setMsg('Good Night')
       }}>GN</button>
       
    </div>
  )
}

export default Message