/* eslint-disable @typescript-eslint/no-explicit-any */
  "use client"
  import useFeatures from '@/hooks/useFeatures';
  import { TCompany } from '@/types/types';
  import Image from 'next/image';
  import Link from 'next/link';
  import React from 'react';
  import { RiShareForwardFill } from 'react-icons/ri';

  type TCompanyData = {
    company:TCompany;
    isLoading:any
  }

  const Company = () => {
    const {company,isLoading}:TCompanyData= useFeatures();
    return (
      <div>
        {
          !isLoading &&
          <div >
         
          <h3  
           className='text-4xl text-center font-bold mt-32 mb-10 text-blue-950'>Company</h3>
          <div 
          style={{backgroundImage:`url(${company?.bgImageUrl as string})`}}
          className={`h-[500px] bg-cover bg-center bg-fixed flex justify-center items-center relative py-8 px-3 lg:pb-14 `}>
          {/* Overlay */}
          
    
          {/* Content */}
          <div 
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          className="relative z-10 w-full lg:w-1/2  space-y-3 border-4 border-white py-8  bg-[rgb(0,0,0,0.7)] ">
          <div className='flex gap-5 item-center'>
            <div className='md:w-[100px] md:h-[100px] w-[60px] h-[60px] relative'>
            <Image src={company?.logoUrl}  layout="fill"  objectFit="cover" alt='shourav group' ></Image>
            </div>
          
        <h2 className='text-rose-600 text-2xl md:text-5xl font-bold max-w-[100px] md:max-w-[300px]'>{company?.companyName}</h2>
          </div>
    
    
            {/* Description */}
          <div className='px-5 text-gray-100'> 
                <p className=" text-sm">
        {
          company?.title
        }
                  </p>
                <h4 className='text-lg font-semibold'> Our Address
                </h4>
          <div className='text-sm w-[250px]'>
            </div>      
          <p >{company?.address}</p>
          <p>{company?.phone}</p>
          <p>{company?.email}</p>
    
    <Link target='_blank' href={company?.websiteUrl}> <button className='text-white border-2 border-white px-4 py-1 mt-6 hover:scale-95 flex item-center justify-center gap-2'><RiShareForwardFill />Visit</button></Link>
          
          </div>
            
        
          </div>
        </div>
        </div>
        }
      </div>
    
    );
  };

  export default Company;