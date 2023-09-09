import { useEffect, useState } from "react";

// src: https://www.youtube.com/shorts/uC9-bXdnHDk

const BadUseEffectUsage = () => {

  const [isStarted, setIsStarted] = useState(false);

  // ================= BEFORE =================
  useEffect(() => {
    if (isStarted) {
      alert('Lesson Started!');
    }
  }, [isStarted]);

  // ================= AFTER =================
  const handleStart = () => {
    setIsStarted(true);
    alert('Lesson Started!');
  }

  
  return (
    <div>
      <button onClick={() => setIsStarted(true)}>Start Lesson</button>
      <button onClick={handleStart}>Start Lesson</button>
    </div>
  )
}

export default BadUseEffectUsage