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

// Extract Facebook Video ID from URL
const getFacebookVideoId = (url: string) => {
  // Handle different Facebook video URL formats
  const patterns = [
    /facebook\.com\/watch\/\?v=(\d+)/,
    /facebook\.com\/[^\/]+\/videos\/(\d+)/,
    /fb\.watch\/([a-zA-Z0-9_-]+)/,
    /facebook\.com\/video\.php\?v=(\d+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  return null;
};

const IntroductionVideo = () => {
  const { whoWeAre, isLoading }: TWhoWeAreInfo = useFeatures();
  const videoId = whoWeAre?.videourl ? getFacebookVideoId(whoWeAre.videourl) : null;

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
          
          {/* Facebook Video Embed */}
          {videoId && (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="w-full lg:w-1/2"
            >
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  src={`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D${videoId}&show_text=false&t=0`}
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Facebook Video"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default IntroductionVideo;