"use client";
import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import Link from "next/link";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useFeatures from "@/hooks/useFeatures";
import { TArticle } from "@/types/types";

const ArticleSectionHomePage = () => {
  const { homepageArticleBG } = useFeatures(); 
  const axiosPublic = useAxiosPublic();
  const [articles, setArticles] = useState([]);  

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosPublic.get("articles?limit=3");
        setArticles(response.data.data.data);
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };

    getData();
  }, [axiosPublic]);

  return (
    <div
      style={{ backgroundImage: `url(${homepageArticleBG})` }}
      className="min-h-screen bg-cover bg-center bg-fixed relative px-3 py-24"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

     

      <div className="container mx-auto relative z-10">
        {/* Title with Underline */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-white inline-block pb-3 border-b-4 border-blue-500">
            Articles
          </h3>
        </div>

        {/* Articles Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch max-w-6xl">
            {articles?.map((article: TArticle) => (
              <ArticleCard article={article} key={article._id} />
            ))}
          </div>
        </div>

        {/* See More Button - Center aligned */}
        <div className="flex justify-center mt-12">
          <Link href="/articles" className="group">
            <button className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 
                             text-white font-semibold rounded-full overflow-hidden 
                             hover:shadow-xl hover:shadow-blue-900/30 transition-all duration-300">
              {/* Button Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button Content */}
              <span className="relative flex items-center justify-center">
                See More Articles
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              
              {/* Button Border Animation */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent 
                            group-hover:border-white/20 transition-all duration-300"></div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleSectionHomePage;