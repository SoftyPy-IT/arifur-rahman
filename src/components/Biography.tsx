"use client"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { TBanner, TBiography, TItem } from '@/types/types';
import useFeatures from '@/hooks/useFeatures';


const Biography = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {banner,isLoading}:{banner:TBanner,isLoading:any}=useFeatures();
  const axiosPublic = useAxiosPublic();
  const [biographyInfo, setBiographyInfo] = useState<TBiography|undefined>();
  const [expanded, setExpanded] = React.useState<string | false>(biographyInfo?.items?.[0]?._id || false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };


    useEffect(()=>{
      const getData =async()=>{
        try {
        const response = await axiosPublic.get('/biography');
        const result= response.data.data;
      
     setBiographyInfo(result);
     if (result?.items?.length > 0) {
      setExpanded(result.items[0]._id);
    }
        } catch (error) {
        console.log(error);  
        }
      
          }    
  
    getData();   
    },[])
  console.log(biographyInfo);  
  return (
    <section 
    
     data-aos="fade-up"
      data-aos-duration="2000"
    
    className='flex justify-center item-center bg-white'>
      <div className='w-[90%] mb-10 bg-white lg:px-10 p-5 relative -top-32 shadow-xl pb-14'>
     <h3 className=' md:text-3xl lg:text-4xl text-blue-950 font-semibold text-center mb-2'>Biography of <span className='text-orange-500 text-bold'>{!isLoading&&banner?.name}</span></h3>
     <p className='text-xs font-semibold text-center mb-8'>{biographyInfo?.title}</p>
     <div className="overflow-hidden mb-8 w-full md:h-[400px] lg:h-[500px] h-[300px] relative"> <Image
      src={biographyInfo?.imageUrl as string}
      alt="Event Image"
      width={1600}
      height={1600}
     className="w-full duration-500  hover:scale-110   h-full  object-cover shadow-md"
    /></div>


<div>
  <p className='px-5 mb-10 text-xs md:text-base'>
  {
    biographyInfo?.shortDescription
  }

  </p>

  {
    biographyInfo?.items?.map((item:TItem)=>
      <Accordion  key={item?._id} expanded={expanded === item?._id } onChange={handleChange(item?._id as string)} className='mb-8   text-gray-500'>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
       <h4 className='text-gray-700 md:text-lg font-semibold'>{item?.itemTitle}</h4>
      </AccordionSummary>
      <AccordionDetails>
       <p className='text-xs md:text-base text-gray-500'>
      {
        item?.itemDescription
      }
       </p>
      </AccordionDetails>
    </Accordion >
    )
  }
      
     
    </div>

</div>
  


  </section>  
  );
};

export default Biography;




