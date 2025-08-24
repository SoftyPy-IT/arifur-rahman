'use client'
import ArticleCard from '@/components/Article/ArticleCard';
import { Pagination, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HeroArticleBanner from './HeroArticleBanner';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { TArticle } from '@/types/types';


const Articles = () => {
  const limit = 6;
  const axiosPublic = useAxiosPublic();
  const [currentPage,setCurrentPage]=useState(1);
  const [articles , setArticles] = useState([]);
  const [totalCount,setTotalCount] = useState(0);

  useEffect(()=>{
    const getData = async () => {
      try {
        const response = await axiosPublic.get(`articles?page=${currentPage}&limit=${limit}`); 
        const {data,totalCount} = response.data.data;
        setArticles(data);
        setTotalCount(totalCount);
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };
  
    getData();
  
   },[axiosPublic,currentPage])
  
  return (
    <div className='bg-white mb-20'>
 {/* banner section  */}
<HeroArticleBanner/>

   {/* article container  */}
 <section className='flex justify-center items-center mt-20 mb-10'>


 <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  px-10 '>

  {
    articles?.map((article:TArticle)=><ArticleCard article={article} key={article._id}  />)
  }

  
  </div>  
 </section>

     {/* pagination buttons */}
         {
            totalCount< limit && currentPage===1 ?"":
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
  );
};

export default Articles;