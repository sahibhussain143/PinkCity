import React from 'react';
import ExploreCycling from './ExploreCycling';
import RidersCycleSlider from './RidersCycleSlider';
import Experts from './Experts';
import MaestroCycle from './MaestroCycle';
import CycleScrollSlider from './CycleScrollSlider';
import TourCategories from './TourCategories';
import DaillyCyclingProgram from './DaillyCyclingProgram';
import TourAndStories from './TourAndStories';
import MostLoveCycleRide from './MostLoveCycleRide';
import MeetingPoint from './MeetingPoint';



function Cycling() {
    return (
        <>

            <div>
                <MostLoveCycleRide />

                <Experts />
                <RidersCycleSlider />
                <CycleScrollSlider />
                <MaestroCycle />
                <TourCategories />
                <ExploreCycling />
                <DaillyCyclingProgram />
                <MeetingPoint/>

                <TourAndStories />
              
               
            </div>

        </>
    );
}

export default Cycling;
