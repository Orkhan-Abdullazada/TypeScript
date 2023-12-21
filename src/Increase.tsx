import React from 'react'

const Increase = ({setCount}:{setCount:React.Dispatch<React.SetStateAction<number>>}) => {
  return (
    <div> <button onClick={()=>{
        setCount(prev=>prev+1)
    }}>+</button></div>
  )
}

export default Increase