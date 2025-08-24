/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import useFeatures from '@/hooks/useFeatures';
import { TMission } from '@/types/types';
import Image from 'next/image';
import React from 'react';

type TMissionData={
  mission:TMission;
  isLoading:any
}

const Mission = () => {
  const {mission,isLoading}:TMissionData = useFeatures();
  return (
    <div>
      {
        !isLoading&&
        <div
        data-aos="fade-down"
        data-aos-duration="1500"
      
      className='flex flex-col md:flex-row justify-between items-center  md:gap-0 max-w-6xl  py-14 md:py-0'>
            {/* image  */}
            <div className=' md:w-1/2'>
                  <Image src={mission?.imageUrl as string} alt='image' width={300} height={300}
                  className='object-cover md:w-[600px] md:h-[600px] w-[300px] h-[400px]' ></Image>
               </div>
            {/* content  */}
      <div className='space-y-5 p-5 px-10 md:w-1/2'>
      <h4 className='text-orange-500 font-semibold'>Mission</h4>
      <h2 className='text-4xl font-bold text-blue-900'>{mission?.title}</h2>
      <p>
     {
      mission?.description
     }
      </p>
    
            </div>
       </div>
      }
    </div>
   
  );
};

export default Mission;