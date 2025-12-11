"use client";
import React, { useEffect, useState } from "react";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import ReactPlayer from "react-player/youtube";
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

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosPublic.get(`voice-on-media?limit=${limit}`);
        const { totalCount, data } = response?.data?.data;
        console.log(totalCount, data);
        setMedias(data);

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
  }, [axiosPublic]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleVideoReady = (id: string) => {
    setVideoReady((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
    <div className="relative">
      <Image src={bgimg} alt="img" fill className="" />
      <div className="relative container mx-auto">
        <div className="py-20"> 
          <h2 className="text-4xl text-white text-center font-bold">
            Videos
          </h2>

          {/* media card container  */}
          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="flex justify-center item-center"
          >
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center mb-8 mt-10 gap-8 px-4">
              {isClient &&
                medias?.slice(0, 3).map((media: TVoiceOnMedia) => (
                  <div
                    key={media?._id}
                    className="w-full max-w-[383px] border-2 shadow-xl rounded-lg overflow-hidden"
                  >
                    {/* Video container with aspect ratio */}
                    <div
                      className="relative w-full"
                      style={{ paddingTop: "56.25%" }}
                    >
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

                    <h2 className="text-md font-bold my-3 text-white px-5">
                      {media?.title}
                    </h2>
                  </div>
                ))}
            </section>
          </div>

          <div className="w-full flex justify-center">
            <Link
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="1000"
              href="/media"
            >
              <button className="hover-border-button">View More</button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default VoiceOnMedia;
