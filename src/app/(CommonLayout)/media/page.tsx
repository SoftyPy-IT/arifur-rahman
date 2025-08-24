'use client'
import React, { useEffect,useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import HeroMediaBanner from './HeroMediaBanner';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import ReactPlayer from 'react-player/youtube'
import { TVoiceOnMedia } from '@/types/types';

const Media = () => {
  const axiosPublic = useAxiosPublic();
  const [medias,setMedias] = useState([]);
  const [totalCount,setTotalCount] = useState(0);
  const [currentPage,setCurrentPage] = useState(1);
  const [isClient,setIsClient] = useState(false);
  const limit = 6; 


     useEffect(()=>{
        const getData =async()=>{
          try {
          const response = await axiosPublic.get(`voice-on-media?limit=${limit}&page=${currentPage}`);
          const {totalCount,data}= response?.data?.data
          console.log(totalCount,data);
          setMedias(data);
          setTotalCount(totalCount);
          } catch (error) {
          console.log(error);  
          }
        
            }      
      getData();   
      },[currentPage,axiosPublic])
    console.log(medias);  

    useEffect(()=>{
      setIsClient(true);
    },[])
  

  return (
    <div className='bg-white'>
           {/* banner section  */}
      <HeroMediaBanner/>      
      
    <div className='my-10'>
           <h2 className='text-4xl text-blue-950 text-center font-bold'>Interviews</h2>



        {/* media card container  */}
 <div
  data-aos="fade-up"
  data-aos-duration="2500"
 
 className='flex justify-center item-center'>
 <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-around mb-8 mt-10 gap-8 '>
               {/* card 1 */}
     
      {
        isClient  && 
        medias?.map((media:TVoiceOnMedia)=>
          <div key={media?._id} className='w-[303px] h-[360px] border-2 shadow-xl '>
            <ReactPlayer
     
              controls
              width={300} height={200} url={media?.videoUrl}  />

                <h2 className='text-lg font-bold my-3 text-black px-5'>{media?.title}</h2>
         
          </div>
        )
      }      
     
      </section>

 </div>
   
               {/* pagination buttons */}
         {
           totalCount<limit && currentPage===1 ?"":
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
      
    </div>
  );
};

export default Media;