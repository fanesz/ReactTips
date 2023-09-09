import { useEffect, useState } from "react";

// src: https://www.youtube.com/shorts/cKFqwy5PThk

interface User {
  username: string;
  friendCount: number;
}

const DerivingStateInReact = () => {

  const [user] = useState<User>(
    { username: 'John', friendCount: 0 }
  )

  // ================= BEFORE =================
  const [isPopular, setIsPopular] = useState(false);

  useEffect(() => {
    setIsPopular(user.friendCount > 1000);
  }, [user.friendCount]);

  // ================= AFTER =================
  const isPopular2 = user.friendCount > 1000;


  return (
    <div>
      {isPopular2 ? 'You Popular!' : 'Not Popular!'}
    </div>
  )
}

export default DerivingStateInReact