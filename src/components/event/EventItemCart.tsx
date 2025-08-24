import { TEvent } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import "./event.css";


const EventCardItem = ({event}:{event:TEvent}) => {
  return (
  
    <div key={event?._id} className="max-w-[520px] h-auto  rounded-xl shadow-lg hover:bg-gray-50 bg-white border">
        <Link href={`/events/${event?._id}`}>
      <div className="p-5">
       <div className="overflow-hidden"> <Image
          src={event?.imageUrl}
          alt="Event Image"
          width={300}
          height={150}
          className="w-full duration-500  hover:scale-110    h-[200px] rounded-lg object-cover shadow-md"
        /></div>

        <div className="mt-4 h-[150px]">
          <h2 className="text-lg font-bold text-blue-950">
            {event?.title.length>100?`${event?.title?.slice(0,100)}...`: event?.title}</h2>
          <p className="text-sm mt-2">
        {event?.shortDescription?.slice(0,100)}<button  className='text-blue-500'>...আরও-দেখুন</button> 
          </p>
          <div className=" text-sm opacity-80 flex flex-row justify-between item-center text-black my-3">
    
         <div className='flex  gap-1 items-center'>
         <span ><FaCalendar /></span>
         <p><strong></strong>{new Date(event?.date).toDateString()}</p>
         </div>
         <div className='flex gap-1 items-center'>
         <span ><FaLocationDot /></span><p><strong></strong>{event?.location}</p>
         </div>
         
         </div>

       <div>
     
       </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default EventCardItem