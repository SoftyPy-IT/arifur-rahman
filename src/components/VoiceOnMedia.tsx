/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import ReactPlayer from "react-player";
import { TVoiceOnMedia } from "@/types/types";
import Link from "next/link";
import Image from "next/image";
import bgimg from "../../public/Images/footer-bg.jpg";

const VoiceOnMedia = () => {
  const axiosPublic = useAxiosPublic();
  const [medias, setMedias] = useState<TVoiceOnMedia[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [videoReady, setVideoReady] = useState<{ [key: string]: boolean }>({});
  const limit = 3;

  const isFacebookVideo = (url: string) => {
    return url.includes('facebook.com') || url.includes('fb.watch');
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosPublic.get(`videos?limit=${limit}`);
        const { totalCount, data } = response?.data?.data;

        // console.log(totalCount, data);
        
        setMedias(data);

        const readyStates: { [key: string]: boolean } = {};
        data.forEach((media: TVoiceOnMedia) => {
          readyStates[media._id] = false;
        });
        setVideoReady(readyStates);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [axiosPublic]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleVideoReady = (id: string) => {
    setVideoReady((prev) => ({ ...prev, [id]: true }));
  };

  const handleIframeLoad = (id: string) => {
    setVideoReady((prev) => ({ ...prev, [id]: true }));
  };

  // Function to extract Facebook video ID from URL
  const getFacebookEmbedUrl = (url: string) => {
    // For Facebook videos
    if (url.includes('facebook.com')) {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=500&height=280`;
    }
    // For Facebook watch URLs
    if (url.includes('fb.watch')) {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=500&height=280`;
    }
    return url;
  };

  return (
    <>
      <div className="relative">
        <Image src={bgimg} alt="img" fill className="" />
        <div className="relative container mx-auto">
          <div className="py-20">
            {/* Title with underline */}
            <div className="text-center mb-10">
              <h2 className="text-4xl text-white font-bold inline-block pb-3 border-b-4 border-blue-500">
                Videos
              </h2>
            </div>

            {/* media card container - Redesigned cards */}
            <div
              data-aos="fade-up"
              data-aos-duration="2500"
              className="flex justify-center item-center"
            >
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center mb-8 mt-10 gap-8 px-4">
                {isClient &&
                  medias?.slice(0, 3).map((media: TVoiceOnMedia) => {
                    const isFacebook = isFacebookVideo(media?.videoUrl);
                    
                    return (
                      <div
                        key={media?._id}
                        className="w-full max-w-[383px] h-full bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 shadow-lg hover:shadow-xl hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                      >
                        {/* Video container */}
                        <div
                          className="relative w-full"
                          style={{ paddingTop: "56.25%" }}
                        >
                          {!videoReady[media._id] && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                              <div className="animate-pulse text-gray-400">
                                Loading video...
                              </div>
                            </div>
                          )}
                          {isFacebook ? (
                            // Facebook iframe embed (works for both regular videos and reels)
                            <iframe
                              src={getFacebookEmbedUrl(media.videoUrl)}
                              className="absolute top-0 left-0 w-full h-full border-0"
                              scrolling="no"
                              allowFullScreen={true}
                              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                              title="Facebook Video"
                              onLoad={() => handleIframeLoad(media._id)}
                              style={{
                                opacity: videoReady[media._id] ? 1 : 0,
                                transition: "opacity 0.3s ease-in",
                              }}
                            />
                          ) : (
                            // YouTube or other videos using ReactPlayer
                            <ReactPlayer
                              url={media.videoUrl}
                              width="100%"
                              height="100%"
                              controls
                              onReady={() => handleVideoReady(media._id)}
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                opacity: videoReady[media._id] ? 1 : 0,
                                transition: "opacity 0.3s ease-in",
                              }}
                            />
                          )}
                        </div>

                        {/* Title container with fixed height */}
                        <div className="p-5 flex-grow flex items-center min-h-[80px]">
                          <h2 className="text-lg font-bold text-white line-clamp-2">
                            {media?.title}
                          </h2>
                        </div>
                      </div>
                    );
                  })}
              </section>
            </div>

            <div className="w-full flex justify-center mt-16">
              <Link
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="1000"
                href="/media"
                className="group"
              >
                <button
                  className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 
                             text-white font-semibold rounded-full overflow-hidden 
                             hover:shadow-xl hover:shadow-blue-900/30 transition-all duration-300"
                >
                  {/* Button Background Effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></div>

                  {/* Button Content */}
                  <span className="relative flex items-center justify-center">
                    View More Videos
                    <svg
                      className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>

                  {/* Button Border Animation */}
                  <div
                    className="absolute inset-0 rounded-full border-2 border-transparent 
                              group-hover:border-white/20 transition-all duration-300"
                  ></div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VoiceOnMedia;