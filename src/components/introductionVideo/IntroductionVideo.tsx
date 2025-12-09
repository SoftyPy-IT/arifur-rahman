/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import useFeatures from "@/hooks/useFeatures";
import { TWhoWeAre } from "@/types/types";
import Link from "next/link";
import React from "react";

type TWhoWeAreInfo = {
  whoWeAre: TWhoWeAre;
  isLoading: any;
};

// Extract YouTube ID from URL
const getYouTubeId = (url: string) => {
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
  return match ? match[1] : null;
};

const IntroductionVideo = () => {
  const { whoWeAre, isLoading }: TWhoWeAreInfo = useFeatures();
  const videoId = whoWeAre?.videourl ? getYouTubeId(whoWeAre.videourl) : null;

  return (
    <div>
      {!isLoading && (
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-16 lg:my-20 max-w-6xl pb-10 lg:pb-0">
          {/* content  */}
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="space-y-5 text-center lg:text-left w-full lg:w-1/2"
          >
            <h4 className="text-orange-500 font-semibold">Who we are</h4>
            <h2 className="text-4xl font-bold text-blue-900">
              {whoWeAre?.title}
            </h2>
            <p>{whoWeAre?.description.slice(0, 500)}</p>
            <Link href={"/about"}>
              <button className="hover-border-button mt-6">
                Discover More
              </button>
            </Link>
          </div>
          
          {/* YouTube embed with responsive container */}
          {videoId && (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="w-full lg:w-1/2"
            >
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default IntroductionVideo;