'use client'
import React, { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import useFeatures from '@/hooks/useFeatures';
import { TArticle } from '@/types/types';

const ArticleSectionHomePage = () => {
  const {homepageArticleBG}= useFeatures();
  const axiosPublic = useAxiosPublic();
  const [articles , setArticles] = useState([])

  useEffect(()=>{
    const getData = async () => {
      try {
        const response = await axiosPublic.get('articles?limit=3'); 
        setArticles(response.data.data.data);
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };
  
    getData();
  
   },[axiosPublic])
  return (
    <div
    style={{backgroundImage:`url(${homepageArticleBG})`}}
    className="  min-h-screen bg-cover bg-center bg-fixed  relative  px-3 lg:pb-14 py-24">
    {/* Overlay */}

    <button className='text-white absolute z-20 top-5 text-3xl right-5'>
  <Link href={'/articles'}> <FaExternalLinkAlt /></Link>
   </button>
     
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
    {/* Content */}
    <h3 className='text-4xl font-bold text-white text-center relative z-10'>Articles</h3>
 <div className='flex justify-center items-center'>
  <div className='flex flex-col lg:flex-row gap-10 justify-around items-baseline relative z-10 py-10'>
  {
    articles?.map((article:TArticle)=><ArticleCard article={article} key={article._id}  />)
  }

  
  </div>  
  
  </div>

 
 
  </div>
  );
};

export default ArticleSectionHomePage;