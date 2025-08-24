'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import EventCardItem from './EventItemCart';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { TEvent } from '@/types/types';


const EventSliderHomePage = () => {
  const axiosPublic = useAxiosPublic();
  const [events, setEvents] = useState([]);
  const limit = 6; 
   useEffect(()=>{
      const getData =async()=>{
        try {
        const response = await axiosPublic.get(`events?type=previous&limit=${limit}`);
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
    <div className=' container'>
      <>
    <section>
        <h3 className='text-4xl font-bold text-center text-blue-950 '>Recent Activities</h3>
   <div className='flex justify-center items-center w-full'>
   <Swiper
        key={events.length}
        effect={'coverflow'}
        speed={4000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={10}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper mb-20"
        breakpoints={{
        
        
          1440: {
            slidesPerView: 3,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 3,
            centeredSlides: true,
          },
         
          768: {
            slidesPerView: 2,
            centeredSlides: true,
          },
       
          640: {
            slidesPerView: 1,
            centeredSlides: true,
          },
          
          320: {
            slidesPerView: 1,
            centeredSlides: true,
      
          },
        }}
      >

        {
          events?.map((event:TEvent,i)=>
            <SwiperSlide key={i} className=' my-16 sm:mx-10 sm:px-5 lg:mx-0 lg:px-0'>
        
          <EventCardItem event={event} ></EventCardItem>
       
           
            </SwiperSlide>
          )
        }
        
       
      </Swiper>
   </div>
    </section>
    </>
    </div>
  );
};

export default EventSliderHomePage;