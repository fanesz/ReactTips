import { useState } from 'react'

// src: https://www.youtube.com/shorts/9zwwMsZRk2s

const FunctionCurryingInEventHandlers = () => {

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  })

  // ================= BEFORE =================
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof typeof formState) => {
    setFormState({
      ...formState,
      [field]: e.target.value,
    })
  }
  const before = (
    <div>
      <input
        type="email"
        value={formState.email}
        onChange={(e) => handleChange(e, 'email')}
      />
      <input
        type="password"
        value={formState.password}
        onChange={(e) => handleChange(e, 'password')}
      />
    </div>
  )

  // ================= AFTER =================
  const handleChange2 = (field: keyof typeof formState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [field]: e.target.value,
    })
  }
  const after = (
    <div>
      <input
        type="email"
        value={formState.email}
        onChange={handleChange2('email')}
      />
      <input
        type="password"
        value={formState.password}
        onChange={handleChange2('password')}
      />
    </div>
  )


  return (
    <div>
      {before}
      {after}
    </div>
  )
}

export default FunctionCurryingInEventHandlers