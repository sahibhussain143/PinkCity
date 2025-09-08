import React from 'react'
import HomeSlider from './HomeSlider'
import FamusPlaces from './FamusPlaces'
import ServicePlaces from './ServicePlaces'
import LatestPackage from './LatestPackage'
import GetInTouch from '../Form/GetInTouch'
import EventsTicketing from './EventsTicketing'
import AllPlaces from './AllPlaces'
import TravelInspiration from './TravelInspiration'
import RecentlyAdded from './RecentlyAdded'



function Home() {
  return (
    <>
 <div>
  <HomeSlider />
   <FamusPlaces/>
   <ServicePlaces/>
   <LatestPackage/>
   <GetInTouch/>
   <RecentlyAdded/>
   <EventsTicketing/>
   <AllPlaces/>
   <TravelInspiration/>
 
 </div>
    </>
  )
}

export default Home