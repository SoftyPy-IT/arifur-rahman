/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import useFeatures from '@/hooks/useFeatures';
import { TVision } from '@/types/types';
import Image from 'next/image';
import React from 'react';


type TVisionData={
  vision:TVision;
  isLoading:any
}
const Vision = () => {
  const {vision,isLoading}:TVisionData = useFeatures();
  return (
 <div>
  {
    !isLoading&&
    <div
    data-aos="fade-up"
    data-aos-duration="1500"
    
    className='flex flex-col  md:flex-row-reverse md:justify-start justify-between items-center py-14 md:py-0  gap-5  md:gap-0  max-w-6xl '>
          {/* image  */}
          <div className=' md:w-1/2'>
                <Image src={vision?.imageUrl} alt='image' width={300} height={300}
                className='object-cover md:w-[600px] md:h-[600px] w-[300px] h-[400px]' ></Image>
             </div>
          {/* content  */}
    <div className='space-y-5 p-5 px-10 md:w-1/2'>
    <h4 className='text-orange-500 font-semibold'>Vission</h4>
    <h2 className='md:text-4xl text-2xl font-bold text-blue-900'>{vision?.title}</h2>
    <p>
  {
    vision?.description
  }
    </p>
    
          </div>
     </div>
  }
 </div>   
   
  );
};

export default Vision;