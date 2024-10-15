import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HappyHalloween from "./components/HappyHalloween"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <HappyHalloween/>
      </div>

    </>
  )
}

export default App
