import { useState } from 'react'
import Nav from './Nav'
import Home from './Home'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {

  return (
    <div className='App'>
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<div className='error'><h1>404 Error</h1></div>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
