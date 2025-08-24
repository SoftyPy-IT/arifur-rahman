'use client'
import React, { useEffect,useState } from 'react';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import ReactPlayer from 'react-player/youtube';
import { TVoiceOnMedia } from '@/types/types';
import Link from 'next/link';

const VoiceOnMedia = () => {
  const axiosPublic = useAxiosPublic();
  const [medias,setMedias] = useState([]);
  const [isClient,setIsClient] = useState(false);
  const limit = 3; 
     useEffect(()=>{
        const getData =async()=>{
          try {
          const response = await axiosPublic.get(`voice-on-media?limit=${limit}`);
          const {totalCount,data}= response?.data?.data
          console.log(totalCount,data);
          setMedias(data);
          } catch (error) {
          console.log(error);  
          }
        
            }      
      getData();   
      },[axiosPublic])
    console.log(medias);  

    useEffect(()=>{
      setIsClient(true);
    },[])
  

  return (
    <div className='bg-white'>
          
    <div className='my-20'>
           <h2 className='text-4xl text-blue-950 text-center font-bold'>Voice On Media</h2>



        {/* media card container  */}
 <div
  data-aos="fade-up"
  data-aos-duration="2500"
 
 className='flex justify-center item-center'>
 <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-around mb-8 mt-10 gap-8 '>
            
     
      {
        isClient  && 
        medias?.slice(0,3).map((media:TVoiceOnMedia)=>
          <div key={media?._id} className='w-[303px] h-[320px] border-2 shadow-xl '>
            <ReactPlayer
     
              controls
              width={300} height={200} url={media?.videoUrl}  />

                <h2 className='text-md font-bold my-3 text-blue-950 px-5'>{media?.title}</h2>
         
          </div>
        )
      }      
     
      </section>


      

 </div>
   
            
<div className='w-full flex justify-center'>
<Link 
     data-aos="fade-up"
     data-aos-delay="1000"
     data-aos-duration="1000"
   href='/media'><button className='hover-border-button'>View More</button></Link>
</div>

    </div> 
      
    </div>
  );
};

export default VoiceOnMedia;