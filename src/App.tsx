import { useState } from 'react';
import { TodoForm, TodoList } from './Components';
import type { Todo } from './types';
import './App.css'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputText, setInputText] = useState<string>("")

  return (
    <div>
      <header>Ash and Jayden's Todo List</header>
      <TodoForm todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;