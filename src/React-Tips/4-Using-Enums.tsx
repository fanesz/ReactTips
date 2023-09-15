// src: https://www.youtube.com/shorts/XXI9BTWWOkE

interface userPlan {
  user: {
    plan: 'free' | 'premium';
  }
}

const Premium = () => {
  return (<h1>Premium plan</h1>)
}
const Free = () => {
  return (<h1>Free plan</h1>)
}

const UsingEnums = () => {

  const user: userPlan = { user: { plan: 'premium' } };

  // ================= BEFORE =================
  const getComponent = (user: userPlan) => {
    if (user.user.plan === 'premium') {
      return <Premium />;
    } else {
      return <Free />;
    }
  }

  // ================= AFTER =================
  const plan = {
    premium: <Premium />,
    free: <Free />,
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