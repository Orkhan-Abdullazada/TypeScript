import React from 'react'

const Decrease = ({setCount}:{setCount:React.Dispatch<React.SetStateAction<number>>}) => {
  return (
    <div>
        <button onClick={()=>{
            setCount(prev=>prev-1)
        }}>-</button>
    </div>
  )
}

export default Decrease