import { TOurConcernIssue } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';


const OurConcernIssue = ({ ourConcernIssue }: { ourConcernIssue: TOurConcernIssue }) => {

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className='flex flex-col lg:flex-row-reverse gap-8 items-center justify-center w-full lg:max-w-6xl my-16 px-3'>

      {/* content  */}
      <div className='space-y-5 p-5 w-full lg:w-1/3 text-center lg:text-left'>
        <h4 className='text-orange-500 font-semibold'>Our Concern Issues</h4>
        <h2 className='text-4xl font-bold text-blue-900'>{ourConcernIssue?.title}</h2>
        <p>
          {
            ourConcernIssue?.description.slice(0, 320)
          }
        </p>
        <Link href={'/events'}><button className='hover-border-button mt-6'>More      Program</button></Link>
      </div>

      {/* image */}
      <div className=' lg:w-1/3'>
        <Image src={ourConcernIssue?.imageUrl} alt='image' width={300} height={400}
          className='object-cover  md:w-[350px] md:h-[450px] w-[300px] h-[400px]' ></Image>
      </div>


      {/* program */}
      <div className='flex flex-col gap-4  w-full lg:w-1/3'>
        {ourConcernIssue?.ourConcernIssues ?
          Object.values(ourConcernIssue.ourConcernIssues)?.map((issue, idx) => (
            <div key={idx} className='px-8 py-2 border-l-2 border-blue-700 flex items-center gap-3 hover:bg-blue-600 hover:text-white text-blue-950'>
              <h3 className='font-semibold text-xl  '>{issue}</h3>
              <span> <IoCheckmarkDoneSharp className='text-3xl text-orange-500' /></span>
            </div>
          ))
          : <p>No issues found</p>}

      </div>
    </div>
  );
};

export default OurConcernIssue;