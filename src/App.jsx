import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import form from './components/form'

function App() {
  const [count, setCount] = useState(0)

  return(
    <div className="App">
      <header/>
      <form />
    </div>
  )
}

export default App
