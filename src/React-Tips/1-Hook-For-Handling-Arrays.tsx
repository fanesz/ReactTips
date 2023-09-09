import { useState } from 'react'
import useArrayState from './Hooks/useArrayState';

// src: https://www.youtube.com/shorts/Z8w7fvYpsoQ

interface Todo {
  name: string;
  completed: boolean;
}

const HookForHandlingArrays = () => {

  // ================= BEFORE =================
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  }

  const removeTodo = (todo: Todo) => {
    setTodos([...todos.filter(t => t !== todo)]);
  }

  // ================= AFTER =================
  const [todos2, { add, remove, clear }] = useArrayState<Todo>([]);

  
  return (
    <div>

      <button onClick={() => add({ name: `todo-${todos2.length}`, completed: false })}>add</button>
      <button onClick={() => clear()}>clear</button>

      {todos2?.map((item, index) => (
        <div key={index}>
          <span>{item.name}</span>
          <button onClick={() => remove(item)}>X</button>
        </div>
      ))}
      
    </div>
  )
}

export default HookForHandlingArrays