import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [bg, setBg] = useState('#fff')

  return (
    <>
      <div className='flex flex-row justify-center'>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          App logo
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setBg('#fff')}>Bg Light</button>
        <button onClick={() => setBg('#333')}>Bg Dark</button>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
