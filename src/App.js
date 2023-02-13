import { useState } from 'react';
import './App.css';
import CompletedTodos from './components/CompletedTodos';
import Navigation from './components/Navigation';
import UncompletedTodos from './components/UncompletedTodos';
import data from "./components/data.js"
import CreateTodo from './components/CreateTodo';

function App() {

  let [showCreateTodo, setShowCreateTodo] = useState(false);
  let [todos, setTodos] = useState(data);

  return (
    <div className="App">
      <Navigation showCreateTodo={showCreateTodo} setShowCreateTodo={setShowCreateTodo} />
      <UncompletedTodos todos={todos} setTodos={setTodos}/>
      <CompletedTodos todos={todos} setTodos={setTodos} />
      {showCreateTodo ? <CreateTodo todos={todos} setTodos={setTodos} setShowCreateTodo={setShowCreateTodo} /> : ""}
    </div>
  );
}

export default App;
