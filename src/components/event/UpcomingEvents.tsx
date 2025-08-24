'use client'
import useAxiosPublic from '@/hooks/useAxiosPublic';
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import EventCardItem from './EventItemCart';
import { TEvent } from '@/types/types';

const UpcomingEvents = () => {
  const axiosPublic = useAxiosPublic();
  const [events, setEvents] = useState([]);

   useEffect(()=>{
      const getData =async()=>{
        try {
        const response = await axiosPublic.get(`events?type=upcoming`);
        const {totalCount,data}= response?.data?.data
        console.log(totalCount,data);
     setEvents(data);
        } catch (error) {
        console.log(error);  
        }
      
          }      
    getData();   
    },[axiosPublic])
  console.log(events);  
  return (
    <div>
    <section className='mb-20'>
      <Marquee pauseOnHover={true} className='h-auto'>
      {
    events?.map((event:TEvent)=><div className="mx-5 my-5" key={event?._id}><EventCardItem   event={event}/></div>)
   }             
           
              
      </Marquee>
        
        </section>    
    </div>
  );
};

export default UpcomingEvents;