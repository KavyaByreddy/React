import React, {useEffect, useState} from 'react'

const Digital = () => {
    let [ct,setCT]=useState(new Date().toLocaleTimeString())
  useEffect(()=>{
    setInterval(()=>{
         setCT(new Date().toLocaleTimeString())
    },1000)
    return ()=>{
        console.log("Un Mounting component")
    }
   
  },[])
  return (
    <div>
        <h3>Digital Clock</h3>
        <h4>{ct}</h4>
    </div>
  )
}

export default Digital