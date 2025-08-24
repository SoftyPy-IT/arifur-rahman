
import React from 'react';
import HeroEventBanner from './HeroEventBanner';
import EventHighLights from '@/components/event/EventHighLights';
import UpcomingEvents from '@/components/event/UpcomingEvents';

const Events = () => {
  return (
    <div className='bg-white'>
               {/* banner section  */}
     <HeroEventBanner/>

       {/* Event Highlights section  */}
    <h3 className='text-4xl font-bold my-10 text-center text-blue-950'>Event Highlights</h3>
    <section
     data-aos="fade-up"
     data-aos-duration="2500"
     className='flex  item-center justify-center'>
   <EventHighLights/>
      </section>  

    
            {/* Up Coming Events section  */}
            
         
<h3 className='text-4xl font-bold my-10 text-center text-blue-950'>Up Comming Events</h3>

      <UpcomingEvents/>

    </div>
  );
};

export default Events;


