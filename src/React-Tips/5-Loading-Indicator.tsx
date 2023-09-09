import { useState } from "react";
import Spinner from "../assets/spinner.tsx"

// src: https://www.youtube.com/shorts/N6p3c-CH8ZI

const LoadingIndicator = () => {

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      alert("Submitted!");
      setLoading(false);
    }, 2000);
  }

  // ================= BEFORE =================
  const MyButton = (props: { title: string, onClick?: () => void }) => {
    return (
      <button onClick={props.onClick}>
        {props.title}
      </button>
    )
  }

  // ================= AFTER =================
  // note: This Spinner component only work with Tailwind CSS
  // other loading design : https://flowbite.com/docs/components/spinner/
  const MyButton2 = (props: { title: string, onClick?: () => void, loading?: boolean }) => {
    return (
      <button onClick={props.onClick}>
        {props.loading && <Spinner />}
        {props.title}
      </button>
    )
  }


  return (
    <div>
      <MyButton title='Submit' onClick={handleClick} />
      <MyButton2 title='Submit w loading' onClick={handleClick} loading={loading} />
    </div>
  )
}

export default LoadingIndicator