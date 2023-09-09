// src: https://www.youtube.com/shorts/XXI9BTWWOkE

interface userPlan {
  user: {
    plan: 'free' | 'premium';
  }
}

const UsingEnums = () => {

  const premium = (<h1>Premium plan</h1>)
  const free = (<h1>Free plan</h1>)
  const user: userPlan = { user: { plan: 'premium' } };

  // ================= BEFORE =================
  const getComponent = (user: userPlan) => {
    if (user.user.plan === 'premium') {
      return premium;
    } else {
      return free;
    }
  }

  // ================= AFTER =================
  const plan = {
    premium: premium,
    free: free,
  }

  const getComponent2 = plan[user.user.plan];


  return (
    <div>
      {getComponent(user)}
      {getComponent2}
    </div>
  )
}

export default UsingEnums