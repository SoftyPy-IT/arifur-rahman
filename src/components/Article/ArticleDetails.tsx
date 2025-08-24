'use client'
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { TArticle } from '@/types/types';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaCalendar } from 'react-icons/fa';import ShareButtons from '../event/ShareButtons';
;


const ArticleDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams(); 
  const [article, setArticle] = useState<TArticle|null>( );
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosPublic.get(`/articles/${id}`); 
        const result = response.data.data;
         setArticle(result);
        } catch (error) {
        console.error('Error fetching the data:', error);
        }
    };

    getData();
  }, [id,axiosPublic]);
  

  if (!article) {
 
    return <div className='text-center my-10'>Loading...</div>;
  }
 
  return (
 <div className='flex justify-center '>
  <div className="w-full bg-white  container ">
 <div className='lg:w-3/5 mx-auto'>
 <div className="px-5 pb-10">
   <div className="relative aspect-[3/2] ">                   
     <Image 
       src={article.imageUrl} 
       fill 
       objectFit='cover'
       className="rounded-lg w-full h-full"
       alt={article.title} 
     />
   </div>
    <div className="mt-10 space-y-4">
      <h2 className="text-xl font-bold text-blue-950">{article?.title}</h2>
      
<div className='flex gap-1 items-center '>
<span ><FaCalendar /></span><p className='text-black'><strong>Publish On :</strong>{new Date(article?.publishedDate).toDateString()}</p>
</div>



      <p className="text-sm mt-2">
    {article?.shortDescription}
      </p>
      
<div dangerouslySetInnerHTML={{__html:article?.description as string}} >
</div>   
    {/* Share Buttons */}
    <div className="mt-24  max-w-[200px]">
            <ShareButtons shareUrl={shareUrl} title={article.title} quote={article.shortDescription} hashtag={`#${article.title}`} />   
          </div> 
   
    </div>
  </div>
</div> 
       

</div>
 </div>
  );
};

export default ArticleDetails;