"use client"
import HeroSection from '@/components/HeroSection';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { THeroSection } from '@/types/types';
import React, { useEffect, useState } from 'react';

const HeroEventBanner = () => {
  const [bannerInfo,setBannerInfo] = useState<THeroSection|undefined>();
  const axiosPublic = useAxiosPublic();
  
  useEffect(()=>{
    const getData =async()=>{
      try {
        const response = await axiosPublic.get('/hero-sections');
      const result= response.data.data;
      const aboutHero:THeroSection = result.find((item:THeroSection)=>item.category==="Event");
      setBannerInfo(aboutHero);
 
      } catch (error) {
      console.log(error);  
      }
    
        }    

  getData();   
  },[])
  return (
    <div>
        <HeroSection category={bannerInfo?.category as string} imageUrlMd={bannerInfo?.bgImageForLg as string} imageUrlSm={bannerInfo?.bgImageForSm as string} title={bannerInfo?.title as string} subTitle={bannerInfo?.subTitle as string}/>   
    </div>
  );
};

export default HeroEventBanner;