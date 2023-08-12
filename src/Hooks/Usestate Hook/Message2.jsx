import React from 'react'

const Message2 = () => {
   let  [msg,setMsg]=React.useState("Hello")

    let gmHandler = ()=>{
        setMsg("Good Morning")
    }
    let gnHandler = ()=>{
        setMsg('Good Night')
    }
  return (
    <div className='container'>
        <h2>Message Component</h2>
        <pre>Message:{msg}</pre>

        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
       
    </div>
  )
}

export default Message2