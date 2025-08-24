"use client"
import React, { useEffect, useState } from 'react';
import ShareButtons from './ShareButtons';
import RelatedEvents from './RelatedEvents';
import { FaLocationDot } from 'react-icons/fa6';
import { FaCalendar } from 'react-icons/fa';
import Image from 'next/image';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { TEvent } from '@/types/types';
import { useParams } from 'next/navigation';



const EventDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams(); 
  const [event, setEvent] = useState<TEvent|null>(null);
 

 const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  useEffect(() => {
    const getData = async () => {
      try {

        const response1 = await axiosPublic.get(`events/${id}`); 
        const result = response1.data.data; 
        setEvent(result);
        console.log(result);
      
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };

    getData();
  }, [id]);



  if (!event) {
 
    return <div className='text-center my-10'>Loading...</div>;
  }

  return (
    <div className="w-full bg-white flex justify-center items-center">
    <div className="container ">
      <div className='lg:w-3/5 mx-auto'>
      <div className="px-5 pb-10">
                       {/* Event Image */}
       
  <div className="relative aspect-[3/2] ">                   
  <Image 
    src={event.imageUrl} 
    fill 
    objectFit='cover'
    className="rounded-lg w-full h-full"
    alt={event.title} 
  />
</div>

        <div className="mt-10  ">
          <h2 className="text-xl font-bold text-blue-950">{event.title}</h2>

          {/* Event Date and Location */}
          <div className="mt-3 text-sm opacity-80 lg:flex flex-row justify-between item-center ">
            <div className="flex gap-1 items-center">
              <span>
                <FaCalendar />
              </span>
              <p className="text-black">
                <strong>Date:</strong> {new Date(event.date).toDateString()}
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <span>
                <FaLocationDot />
              </span>
              <p className="text-black">
                <strong>Location:</strong> {event.location}
              </p>
            </div>
          </div>

          {/* Event Short Description */}
          <p className="text-sm my-10">{event.shortDescription}</p>

          {/* Event Full Description */}
          <div dangerouslySetInnerHTML={{ __html: event.description }} />
            
          {/* Share Buttons */}
          <div className="mt-24  max-w-[200px]">
            <ShareButtons shareUrl={shareUrl} title={event.title}  quote={event.shortDescription} hashtag={`#${event.title}`} />   
          </div>
           
        </div>

      </div>
      </div>
        {/* Related Events */}
    <RelatedEvents />
    </div>

  
  </div>
  )};
;

export default EventDetails;



