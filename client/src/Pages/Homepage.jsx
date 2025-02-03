import React from 'react'
import Header from '../Components/Header'
import Steps from '../Components/Steps'
import Description from '../Components/Description'
import Testomonials from '../Components/Testomonials'
import GenerateButton from '../Components/GenerateButton'

function Homepage() {
  return (
    <div>
        <Header />
        <Steps />
        <Description />
        <Testomonials />
        <GenerateButton />
    </div>
  )
}

export default Homepage