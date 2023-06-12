import React from 'react'
import Home from './home'
import Edit from './Edit'
import { Route, Routes, Link } from "react-router-dom"

const App = () => {
  return (
    <>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  )
}

export default App