import { useState } from 'react'
import './App.css'

function App() {
  const [resust, setResult] = useState('')
  return (
      <div className='App'>
        <h1> MERN RENDER</h1>

        <button onClick={async() => {
          const res = await fetch('http://localhost:3000/ping')
          const data = await res.json()
          console.log(data)
          setResult(data)
        }}> 
          USERS
        </button>

        <pre>
          {
            JSON.stringify(resust,null,2)
          }
        </pre>

      </div>
  )
}
export default App
