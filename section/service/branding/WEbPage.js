import React from 'react'
import Navbar from '../../../layout/Navbar'
import Hero from './Hero'
import "../WebPage.css"
import ServiceDetail from './ServiceDetail'
import LandingPage from './LandingPage'
import Footer from '../../../layout/Footer'

const WEbPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServiceDetail />
      <LandingPage />
      <Footer />
    </div>
  )
}

export default WEbPage
