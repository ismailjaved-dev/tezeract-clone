import React from 'react'
import Navbar from '../layout/Navbar'
import Dashboard from '../section/home/Dashboard'
import GifContainer from '../section/home/GifContainer'
import More from '../section/home/More'
import Services from '../section/home/Services'
import Details from '../section/home/Details'
import Work from '../section/home/Work'
import OurBrands from '../section/home/OurBrands'
import Footer from '../layout/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <GifContainer />
      <More />
      <Services />
      <Details />
      <Work />
      <OurBrands />
      <Footer />
    </div>
  )
}

export default Home
