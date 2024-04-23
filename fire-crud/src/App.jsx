import { useState } from 'react'



import Singup from './component/Singup'
import Login from './component/Login'
import Movie from './component/Movie'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Singup />
      <Login />
      <Movie/>
    </>
  )
}

export default App
