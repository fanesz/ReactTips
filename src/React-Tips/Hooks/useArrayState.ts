import { useState } from "react"

// hooks for 1-Hook-For-Handling-Arrays

type ArrayStateActions<T> = {
  add: (item: T) => void;
  remove: (item: T) => void;
  clear: () => void;
}

const useArrayState = <T>(
  initialItems: T[],
): [T[], ArrayStateActions<T>] => {

  const [items, setItems] = useState(initialItems);
  const add = (item: T) => setItems([...items, item]);

  const remove = (item: T) => {
    setItems([...items.filter(i => i !== item)]);
  }

  const clear = () => setItems([]);

  return [items, { add, remove, clear }];

}

export default useArrayState;