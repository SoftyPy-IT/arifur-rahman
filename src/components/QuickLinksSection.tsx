import Link from 'next/link';
import React from 'react';
import { GrGallery } from 'react-icons/gr';
import { MdEvent, MdPermMedia } from 'react-icons/md';





const QuickLinksSection = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-10 '>
            {/* Events */}
      <div 
       data-aos="fade-up"
       data-aos-duration="500"
      
      className='w-[280px]  p-5 hover:bg-gray-300 space-y-6 text-center shadow-2xl flex flex-col justify-center items-center border bg-white '>
            <span><MdEvent className='text-5xl text-orange-500'/></span>
            <h3 className='text-3xl font-bold'>Events</h3>
           
           <Link href={'/events'}> <button className='hover-border-button'>View Schedule</button></Link>
      </div>

            {/* gallery */}
      <div
     data-aos="fade-up"
     data-aos-duration="500"
      className='w-[280px] hover:bg-gray-300 p-5 space-y-6 text-center shadow-2xl flex flex-col justify-center items-center border bg-white'>
            <span><GrGallery className='text-4xl text-orange-500'/></span>
            <h3 className='text-3xl font-bold'>Gallery</h3>
          
           <Link href={'/gallery'}> <button className='hover-border-button'>View Gallery</button></Link>
      </div>

            {/* Media */}
      <div
      data-aos="fade-up"
      data-aos-duration="500"
      className='w-[280px] hover:bg-gray-300 p-5 space-y-6 text-center shadow-2xl flex flex-col justify-center items-center border bg-white'>
            <span><MdPermMedia className='text-4xl text-orange-500'/></span>
            <h3 className='text-3xl font-bold'>Media</h3>
          
           <Link href={'/media'}><button className='hover-border-button'>View Media</button></Link>
      </div>
     
    </div>
  );
};

export default QuickLinksSection;