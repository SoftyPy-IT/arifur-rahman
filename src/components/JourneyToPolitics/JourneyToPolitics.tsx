"use client"
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { TJourneyToPolitics } from '@/types/types';
import React, { useEffect, useState } from 'react';

const JourneyToPolitics = () => {
  const axiosPublic = useAxiosPublic();
  const [journeys, setJourneys] = useState([]);

    useEffect(()=>{
      const getData =async()=>{
        try {
        const response = await axiosPublic.get('/journey-to-politics');
        const result= response.data.data.data;
      
     setJourneys(result);
        } catch (error) {
        console.log(error);  
        }
      
          }    
  
    getData();   
    },[])

  return (
    <section
    data-aos="fade-up"
    data-aos-duration="1500"  
    
    className="bg-gray-100 py-16">
    <div className="container mx-auto px-6 lg:px-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-950">Journey to Politics</h2>
        <p className="text-gray-600 mt-4">
          A timeline of significant milestones in the life of <span className="font-semibold text-orange-500">Mojumder Arifur Rahman</span>.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-4 border-blue-700">
        
        {/* Timeline Items */}
{
  journeys?.map((journey:TJourneyToPolitics)=>
    <div key={journey?._id} className="mb-10 ml-8">
          <div className="absolute w-6 h-6 bg-blue-700 rounded-full -left-3"></div>
          <h3
           data-aos="fade-up"
           data-aos-delay="100"
           data-aos-duration="1500" 
          
          className="text-2xl font-bold text-gray-800">{journey?.title}</h3>
          <p className="text-gray-600 mt-2">
          {journey?.shortDescription}
          </p>
        </div>
  )
}
    
      </div>
    </div>
  </section>
  );
};

export default JourneyToPolitics;