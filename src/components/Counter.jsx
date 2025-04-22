import React, { useState } from 'react'


function Counter() {
  const [count,setCont] = useState(0); 
  return ( 
    <div>
        <h1>Counter Demo</h1>
        <h3>Counter:{count}</h3>
        <button onClick={(val) => setCont(count+1)}>Increament counter</button>
        <button onClick={(val) => setCont(count-1)}>Decreament counter</button>
    </div>
    
    
  )
}

export default Counter