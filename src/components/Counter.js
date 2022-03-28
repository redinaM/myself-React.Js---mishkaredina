import React, {useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
    const addMore = () =>{
        setCount(count + 1);
    }
  return (
    <div>
            <h2>Counter: {count}</h2>
        <button onClick={addMore}>Increment</button>
    </div>
  )
}

export default Counter