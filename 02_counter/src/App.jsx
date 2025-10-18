import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(5);
  //let counter = 5

  const addValue = () => {
    
    console.log('Add Value Clicked', counter);
    setCounter(counter + 1);
  } 
  
  const removeValue = () => {
    console.log('Subtract Value Clicked', counter);
    setCounter (counter - 1);
  }

  return (
    <>
      <h1>React Learnn</h1>
      <h2>Counter App : {counter}</h2>

      <button
      onClick={addValue }
      >Add Value</button>
      <br />
      <button
      onClick ={removeValue}
      >Subtract Value</button> 
    </>
  )
}

export default App
