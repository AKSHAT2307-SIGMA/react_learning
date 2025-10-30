import { useState, useEffect } from 'react'
import {ToDoProvider} from "./context/ToDoContext"
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/Todoitem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
     setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos")
    if(storedTodos && storedTodos.length > 0){
      setTodos(JSON.parse(storedTodos))
    }
  },[])

useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
}, [todos]) 
 
  return (
    <ToDoProvider value={{todos, updateTodo, deleteTodo, addTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm /> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                            <div key ={todo.id} className="w-full"> 
                                <TodoItem todo={todo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </ToDoProvider>
  )
}

export default App
