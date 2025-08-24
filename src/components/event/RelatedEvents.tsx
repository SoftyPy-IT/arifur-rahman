"use client"
import { TEvent } from '@/types/types';
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import EventCardItem from './EventItemCart';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useSwipeable } from "react-swipeable";
const RelatedEvents = () => {
  const axiosPublic = useAxiosPublic();
  const limit = 10;
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosPublic.get(`events?type=previous&limit=${limit}`);
        const {data}= response?.data?.data
        setEvents(data);
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };

    getData();
  }, [axiosPublic]);


  
    const [direction, setDirection] = useState<"left" | "right">("left");
  
    const handlers = useSwipeable({
      onSwipedLeft: () => setDirection("left"),
      onSwipedRight: () => setDirection("right"),
      preventScrollOnSwipe: true,
      trackMouse: true,
    });
  

  
  if (!event) {
    return <div className='text-center my-10'>Loading...</div>;
  }  
  return (
    <div>
              {/* Related Events section  */}
            
         
            <h3 className='text-4xl font-bold my-10 text-center text-blue-950'>Latest Events</h3>
            <section className="mb-20 " {...handlers}>
                  <Marquee className='h-auto overflow-hidden' pauseOnHover={true} direction={direction}>
                    {events?.map((event: TEvent) => (
                      <div className="mx-5" key={event._id}>
                        <EventCardItem event={event} />
                      </div>
                    ))}
                  </Marquee>
                </section>
    </div>
  );
};

export default RelatedEvents;


// {/* <div>
// <FacebookShareButton url={shareUrl} hashtag={description}>
//    <button style={{ display: 'flex', alignItems: 'center' }}>
//      <Image
//       width={20}
//       height={20}
//        src="/facebook-icon.png"
//        alt="Share on Facebook"
//        style={{ width: '20px', height: '20px', marginRight: '8px' }}
//      />
//      Facebook
//    </button>
//  </FacebookShareButton>


// </div> */}


