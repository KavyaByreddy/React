import React from 'react'

const Message3 = () => {
   let  [msg,setMsg]=React.useState("Hello")

    let gmHandler = ()=>{
        setMsg("Good Morning")
    }
    
  return (
    <div className='container'>
        <h2>Message Component</h2>
        <pre>Message:{msg}</pre>

        <button onClick={gmHandler}>GM</button>
       <button onClick={()=>{
        setMsg('Good Night')
       }}>GN</button>
       
    </div>
  )
}

export default Message3