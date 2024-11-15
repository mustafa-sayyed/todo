import { useRef, useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const element = useRef();
  const add = (e) => {
    e.preventDefault();
    if (!todo) {
      return;
    } else {
      addTodo({ id: Date.now(), todo: todo, completed: false });
      setTodo("")
    }
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-2.5"
        value={todo}
        ref={element}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-6 py-2.5 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
