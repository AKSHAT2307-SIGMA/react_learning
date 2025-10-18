import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className = 'bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind Test</h1>
      <Card username = "AkshatReactLearn" btnText = "Dabaoo Mujhee"/>
    </>
  )
}

export default App
