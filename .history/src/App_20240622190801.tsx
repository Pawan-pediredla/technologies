import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeSwitcher from './assets/comp/ThemeSwitcher'
// Bootstrap CSS

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeSwitcher/
    </>
  )
}

export default App
