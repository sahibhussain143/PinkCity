import React from 'react'
import AboutWeb from './AboutWeb'
import AboutTourPlaces from './AboutTourPlaces'
import LandingAboutPage from './LandingAboutPage'


function About() {
  return (
    <div>
    <div className="">
        <LandingAboutPage/>
         {/* <AboutWeb/> */}
        <AboutTourPlaces/>
               

      </div>
    </div>
  )
}

export default About