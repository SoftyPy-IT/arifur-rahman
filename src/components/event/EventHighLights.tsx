'use client'
import useAxiosPublic from '@/hooks/useAxiosPublic';
import React, { useEffect, useState } from 'react';
import EventCardItem from './EventItemCart';
import { TEvent } from '@/types/types';
import { Pagination, Stack } from '@mui/material';

const EventHighLights = () => {
  const axiosPublic = useAxiosPublic();
  const [events, setEvents] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [totalCount,setTotalCount] = useState(0);
  const limit = 8; 
   useEffect(()=>{
      const getData =async()=>{
        try {
        const response = await axiosPublic.get(`events?type=previous&limit=${limit}&page=${currentPage}`);
        const {totalCount,data}= response?.data?.data
        console.log(totalCount,data);
        setEvents(data);
        setTotalCount(totalCount);
        } catch (error) {
        console.log(error);  
        }
      
          }      
    getData();   
    },[currentPage,axiosPublic])
  console.log(events);  
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-between items-center gap-10'>
 {events.length === 0 ? (
      <p>No events found</p> 
    ) : (
      events.map((event: TEvent) => <EventCardItem key={event?._id} event={event} />)
    )}     
               
 </div>
            {/* pagination buttons */}
        {
           totalCount< limit && currentPage===1 ?"":
           <div className='flex item-center justify-center mb-20 mt-8'>
         <Stack spacing={2}>
          
          <Pagination
           count={Math.ceil(totalCount/limit)}
           page={currentPage}
           onChange={(event,value)=>setCurrentPage(value)}
           color="primary" />
         
        </Stack>
        </div>
         }    
    </div>    
  );
};

export default EventHighLights;