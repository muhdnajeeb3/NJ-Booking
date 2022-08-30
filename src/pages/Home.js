import React from 'react'
import Featured from '../components/featured/featured'
import FeaturedProperties from '../components/featuredproperties/FeaturedProperties'
import Firstsec from '../components/Firstsec'
import Footer from '../components/footer/footer'
import Header from '../components/Header'
import Maillist from '../components/mailList/Maillist'
import PropertyList from '../components/property/PropertyList'

import './Home.css'

function Home() {
  return (
    <>
    <Header/>
    <Firstsec />
    <div className="homecontainer">
      <Featured />
      <h1 className="hometitle">Browse by property type</h1>
      <PropertyList />
      <h1 className="hometitle">Homes guests love</h1>
      <FeaturedProperties />
      <Maillist />
      <Footer />
    </div>
        
    </>
  )
}

export default Home