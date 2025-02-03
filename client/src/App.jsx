import React, { useCallback, useContext } from 'react'
 import { Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import BuyCredit from './Pages/BuyCredit'
import Result from './Pages/Result'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Login from './Components/Login'
import { AppContext } from './Context/AppContext'

const App = () => {

  const {showLogin} = useContext(AppContext)
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <Navbar />
    { showLogin && <Login />}
        <Routes >

          <Route path='/'  element={<Homepage />}/>
          <Route path='/result'  element={<Result/>}/>
          <Route path='/buy'  element={<BuyCredit />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App