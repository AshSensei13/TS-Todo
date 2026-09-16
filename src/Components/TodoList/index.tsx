import TodoItem from "../TodoItem";
import type { Todo } from "../../types";

interface TodoListProps {
    todos:Todo[]; 
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
} 

function TodoList({ todos, setTodos }:TodoListProps) {
  function deleteTodo(todo:Todo):void {
    let filteredTodos = todos.filter(el => el !== todo);
    setTodos(filteredTodos);
  }

  function completeTodo(todo:Todo):void {
    setTodos(todos.map((item) => {
      if (item === todo) {
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    }))
  }

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {
          todos.map((todo, i) => (
            <TodoItem
              todo={todo}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
              key={i}
            />
          ))
        }
      </ul>
    </div>
  )
}

export default TodoList;