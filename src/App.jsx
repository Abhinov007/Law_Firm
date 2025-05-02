import React from 'react'

import './App.css'
import Navbar from './components/Navbar'

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Login from './pages/Login'




function App() {


  return (
    <>

    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/register' element={<Register />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
   
   
    
    </>
  )
}

export default App
