import React from 'react'
import Home from './pages/Home'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'
const App = () => {
  return (
    <>
      <NavBar/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/' element={<Signin/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App