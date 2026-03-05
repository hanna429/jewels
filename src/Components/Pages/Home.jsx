import React from 'react'
import Jewels from '../Home/Home'
import Collections from '../Home/Collections'
import BestSellers from '../Home/BestSellers'
import Review from '../Home/Review'
import Footer from '../sharedComonent/Footer'

function Home() {
  return (
    <div>
        <Jewels/>
        <Collections/>
        <BestSellers/>
        <Review/>
        <Footer/>
    </div>
  )
}

export default Home
