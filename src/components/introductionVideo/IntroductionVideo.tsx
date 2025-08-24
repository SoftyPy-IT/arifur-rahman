/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import useFeatures from '@/hooks/useFeatures';
import { TWhoWeAre } from '@/types/types';
import Link from 'next/link';
import React from 'react';


type TWhoWeAreInfo={
  whoWeAre:TWhoWeAre;
  isLoading:any
}

const IntroductionVideo = () => {
  const {whoWeAre,isLoading}:TWhoWeAreInfo = useFeatures();
  return (
 <div>
  {
    !isLoading&&
    <div className='flex flex-col lg:flex-row justify-between items-center lg:gap-24 gap-10 my-20 max-w-6xl  '>
    {/* video  */}
<div
  data-aos="fade-up"
  data-aos-duration="1000"

className='bg-blue-700  w-[300px] h-[250px]  md:w-[600px] md:h-[400px] '>
 <div className='w-[300px] shadow-xl h-[250px] relative left-4 top-4 md:left-10 md:top-10 md:w-[600px] md:h-[400px]' >
     <video
       className=" top-0 left-0 w-full h-full object-cover"
       controls
      
     >

       <source src={'/Images/mrmillat-3.mp4'} type="video/mp4" />
   
     </video>
 </div>
</div>
    {/* content  */}
<div
data-aos="fade-down"
data-aos-duration="1000"
className='space-y-5 p-5 text-center lg:text-left'>
<h4 className='text-orange-500 font-semibold'>Who we are</h4>
<h2 className='text-4xl font-bold text-blue-900'>{ whoWeAre?.title
  }</h2>
<p>
{
  whoWeAre?.description.slice(0,500)
}
</p>
<Link href={'/about'}><button className='hover-border-button mt-6'>Discover More</button></Link>
    </div>
</div>
  }
 </div>
  );
};

export default IntroductionVideo;