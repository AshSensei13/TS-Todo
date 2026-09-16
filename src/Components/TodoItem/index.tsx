import type { Todo } from "../../types";

interface TodoItemProps {
    todo: Todo;
    deleteTodo: any;
    completeTodo: any;
} 

function TodoItem({ todo, deleteTodo, completeTodo }:TodoItemProps) {
  return (
    <li className="todo">
      <span className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {todo.name}
      </span>

      <button
        className="trash-btn"
        onClick={() => deleteTodo(todo)}
      >
        Delete
      </button>

      <button
        className="complete-btn"
        onClick={() => completeTodo(todo)}
      >
        Complete
      </button>
    </li>
  )
}

export default TodoItem;
