import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const [resust, setResult] = useState('')
  return (
      <div className='App'>
        <h1> REnder </h1>
        <Navbar />

        <Footer />
        {/* <button onClick={async() => {
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
        </pre> */}



      </div>
  )
}
export default App