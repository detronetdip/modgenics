import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Imagebox from './components/Imagebox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Imagebox itemsPerPage={1}/>
    </div>
  )
}

export default App
