import React from 'react'
import Home from './pages/Home'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'
import Notfound from './pages/Notfound'
const App = () => {
  return (
    <>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Signin/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App