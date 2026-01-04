/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-cards";
import { useEffect, useState } from "react";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { TPhotoCards } from "@/types/types";
import Link from "next/link";

const PhotoCardsSlider = () => {
  const axiosPublic = useAxiosPublic();
  const [photoCards, setPhotoCards] = useState<TPhotoCards[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axiosPublic.get("/photoCards");

        if (response.data.success) {
          let photoCardsData: TPhotoCards[] = [];

          // Handle different response structures
          if (Array.isArray(response.data.data)) {
            photoCardsData = response.data.data;
          } else if (
            response.data.data?.data &&
            Array.isArray(response.data.data.data)
          ) {
            photoCardsData = response.data.data.data;
          }

          // Sort by date (newest first) and limit to 5 for slider
          const sortedPhotoCards = photoCardsData
            .sort((a, b) => {
              const dateA = a.date ? new Date(a.date).getTime() : 0;
              const dateB = b.date ? new Date(b.date).getTime() : 0;
              return dateB - dateA;
            })
            .slice(0, 5); // Limit to 5 for slider

          setPhotoCards(sortedPhotoCards);
        }
      } catch (error: any) {
        setError(error.message || "Failed to load photo cards");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [axiosPublic]);

  const mapPhotoCardToCardData = (photoCard: TPhotoCards) => {
    return {
      id: photoCard._id || "",
      title: photoCard.title || "Photo Card",
      image: photoCard.imageUrl || "/images/default-photo.jpg",
    };
  };

  const photoCardsList = photoCards.map(mapPhotoCardToCardData);

  return (
    <div className="relative mb-8 w-full">
      <div className="flex justify-center items-center w-full">
        {loading ? (
          <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] aspect-square flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading photo cards...</p>
            </div>
          </div>
        ) : error ? (
          <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] aspect-square flex items-center justify-center">
            <div className="text-center">
              <p className="text-red-500">Error loading photo cards</p>
              <p className="text-sm text-gray-500 mt-2">{error}</p>
            </div>
          </div>
        ) : photoCardsList.length === 0 ? (
          <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] aspect-square flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500">No photo cards available</p>
              <p className="text-sm text-gray-400 mt-2">
                Add some photo cards first
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw]">
            <Swiper
              effect="cards"
              grabCursor={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[EffectCards, Autoplay]}
              className="w-full"
              style={{
                maxWidth: "min(400px, 90vw)", // Responsive max width
                margin: "0 auto",
              }}
            >
              {photoCardsList.map((photoCard) => (
                <SwiperSlide key={photoCard.id} className="h-auto">
                  <div className="group p-0 relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 border-0 rounded-md w-full">
                    <div className="relative group overflow-hidden aspect-square w-full">
                      <Image
                        src={photoCard.image}
                        alt={photoCard.title}
                        height={500}
                        width={400}
                        className="transition-transform duration-500 group-hover:scale-110"
                        // sizes="(max-width: 640px) 250px, 
                        //        (max-width: 768px) 300px, 
                        //        (max-width: 1024px) 350px, 
                        //        (max-width: 1280px) 400px, 
                        //        450px"
                        priority={false}
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      {/* Content overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 text-white">
                        <div className="space-y-1 sm:space-y-2">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold leading-tight line-clamp-2">
                            {photoCard.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center my-5 mt-8 sm:mt-10">
        <Link href="/photo-card" className="w-full max-w-[200px] sm:max-w-[220px]">
          <button className="hover-border-button rounded w-full py-2 sm:py-3 text-sm sm:text-base">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PhotoCardsSlider;