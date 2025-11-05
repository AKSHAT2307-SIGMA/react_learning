import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redux Toolkit Todo App</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  )
}

export default App
