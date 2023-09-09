import { useState } from "react";

// src: https://www.youtube.com/shorts/RPfD5IQLYIc

const HandlingMultipleStateUpdates = () => {

  const [count, setCount] = useState(0);

  // ================= BEFORE =================
  const handleIncrement = () => {
    setCount(count + 1);
    setCount(count + 1);
  }
  
  // ================= AFTER =================
  const handleIncrement2 = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }


  return (
    <div>
      <div>{count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleIncrement2}>Increment2</button>
    </div>
  )
}

export default HandlingMultipleStateUpdates