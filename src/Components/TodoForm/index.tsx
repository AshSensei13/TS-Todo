import type React from "react";
import type { Todo } from "../../types";
interface TodoFormProps {
    todos:Todo[]; 
    inputText:string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
} 

function TodoForm({ todos, inputText, setInputText, setTodos}:TodoFormProps) {

  function handleSubmit(e:React.SubmitEvent) {
    e.preventDefault();
    const newTodo: Todo = { name: inputText, completed: false}
    setTodos([
      ...todos, newTodo      
    ])
    setInputText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        required
      />
      <button
        type="submit" className="todo-button"
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm;