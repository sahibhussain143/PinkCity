import React from 'react'
import LandingPagePackage from './LandingPagePackage'
import PackageBook from './PackageBook'
import MustTry from './MustTry'
import Destinations from './Destinations'

function Packages() {
  return (
    <div>
      <div className="">
  <LandingPagePackage/>
  <PackageBook/>
  <MustTry/>
  {/* <Destinations/> */}


      </div>
    </div>
  )
}

export default Packages