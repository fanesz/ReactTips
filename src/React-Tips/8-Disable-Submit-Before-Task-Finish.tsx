import { useRef, useState } from "react"

// src: my self

const DisableSubmitBeforeTaskFinish = () => {

  const nameRef = useRef<HTMLInputElement>(null)

  // ================= BEFORE =================
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {
      console.log(nameRef.current?.value + ' submitted...')
    }, 1000)
  }

  const before = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input name="name" ref={nameRef} />
        <button>Submit</button>
      </form>
    )
  }

  // ================= AFTER =================
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit2 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log(nameRef.current?.value + ' submitted...')
      setIsSubmitting(false);
    }, 1000)
  }

  const after = () => {
    return (
      <form onSubmit={handleSubmit2}>
        <input name="name" ref={nameRef} />
        <button disabled={isSubmitting}>Submit</button>
      </form>
    )
  }


  return (
    <div>

      {before()}
      {after()}

    </div>
  )
}



export default DisableSubmitBeforeTaskFinish