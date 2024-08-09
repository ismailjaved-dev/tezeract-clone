import React from 'react'
import Navbar from '../../layout/Navbar'
import Hero from './Hero'
import "./Career.css"
import Careertable from './Careertable'
import Benefits from './Benefits'

const Career = () => {
  return (
    <div>
        <Navbar />
      <Hero />
      <Careertable />
      <Benefits />
    </div>
  )
}

export default Career
