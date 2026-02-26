import { useState } from 'react'

import './App.css'
import {Navbar} from './Components/Navbar1'
import AllRoutes from "./Router/AllRouters"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <AllRoutes />
    </>
  )
}

export default App