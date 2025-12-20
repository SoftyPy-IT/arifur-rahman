"use client";
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import HeroMediaBanner from "./HeroMediaBanner";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import ReactPlayer from "react-player";
import { TVoiceOnMedia } from "@/types/types";

const Media = () => {
  const axiosPublic = useAxiosPublic();
  const [medias, setMedias] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const [videoReady, setVideoReady] = useState<{ [key: string]: boolean }>({});
  const limit = 6;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosPublic.get(
          `videos?limit=${limit}&page=${currentPage}`
        );
        const { totalCount, data } = response?.data?.data;
        console.log(totalCount, data);
        setMedias(data);
        setTotalCount(totalCount);

        // Initialize video ready states
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
  }, [currentPage, axiosPublic]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleVideoReady = (id: string) => {
    setVideoReady((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="bg-white">
      {/* banner section  */}
      <HeroMediaBanner />

      <div className="my-10 container mx-auto px-4">
        {/* Title with underline - centered */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold inline-block pb-3 border-b-4 border-blue-500 text-blue-950">
            Videos
          </h2>
        </div>

        {/* media card container - Same design as previous component */}
        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="flex justify-center"
        >
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center mb-8 gap-8">
            {isClient &&
              medias?.map((media: TVoiceOnMedia) => (
                <div
                  key={media?._id}
                  className="w-full max-w-[383px] h-full bg-gray-50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-400 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  {/* Video container with loading state */}
                  <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                    {!videoReady[media._id] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                        <div className="animate-pulse text-gray-500">
                          Loading video...
                        </div>
                      </div>
                    )}
                    <ReactPlayer
                      url={media?.videoUrl}
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
                  </div>

                  {/* Title container with fixed height */}
                  <div className="p-5 flex-grow flex items-center min-h-[80px] bg-white">
                    <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
                      {media?.title}
                    </h2>
                  </div>
                </div>
              ))}
          </section>
        </div>

        {/* pagination buttons */}
        {totalCount < limit && currentPage === 1 ? (
          ""
        ) : (
          <div className="flex items-center justify-center mb-20 mt-12">
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(totalCount / limit)}
                page={currentPage}
                onChange={(event, value) => setCurrentPage(value)}
                color="primary"
                sx={{
                  '& .MuiPaginationItem-root': {
                    color: '#1e40af', 
                    border: '1px solid #d1d5db', 
                    '&:hover': {
                      backgroundColor: '#dbeafe', 
                    },
                  },
                  '& .MuiPaginationItem-root.Mui-selected': {
                    backgroundColor: '#1e40af', 
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#1e3a8a', 
                    },
                  },
                }}
              />
            </Stack>
          </div>
        )}
      </div>
    </div>
  );
};

export default Media;