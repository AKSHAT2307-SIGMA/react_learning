
import { useState } from 'react'


function App() {
  const [color, setColor] =  useState("orange");

  return (
    <div className ="w-full h-screen duration-200"
    style = {{  backgroundColor : color}}
      
     >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
          onClick ={() => setColor("red")}
          className ="outline -none px-4 py-1 rounded-full text-white shadow-lg"
          style= {{backgroundColor : "red"}}
          >Red</button>
          <button
          onclick ={() => setColor("blue")}
          className ="outline -none px-4 py-1 rounded-full text-white shadow-lg"
          style= {{backgroundColor : "blue"}}
          >Blue</button><button
          onClick ={() => setColor("Orange")}
          className ="outline -none px-4 py-1 rounded-full text-white shadow-lg"
          style= {{backgroundColor : "Orange"}}
          >Orange</button><button
          onClick ={() => setColor("Grey")}
          className ="outline -none px-4 py-1 rounded-full text-white shadow-lg"
          style= {{backgroundColor : "Grey"}}
          >Grey</button><button
          onClick ={() => setColor("DarkBlue")}
          className ="outline -none px-4 py-1 rounded-full text-white shadow-lg"
          style= {{backgroundColor : "DarkBlue"}}
          >DarkBlue</button>
        </div>
      </div>
     </div>
  )
}

export default App
