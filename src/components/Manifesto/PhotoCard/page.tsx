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

        let data: TPhotoCards[] = [];

        if (Array.isArray(response.data?.data)) {
          data = response.data.data;
        } else if (Array.isArray(response.data?.data?.data)) {
          data = response.data.data.data;
        }

        // Sort by date (newest first) & limit to 5
        const sorted = data
          .sort((a, b) => {
            const d1 = a.date ? new Date(a.date).getTime() : 0;
            const d2 = b.date ? new Date(b.date).getTime() : 0;
            return d2 - d1;
          })
          .slice(0, 5);

        setPhotoCards(sorted);
      } catch (err: any) {
        setError(err?.message || "Failed to load photo cards");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [axiosPublic]);

  return (
    <div className="relative w-full mb-12">
      <div className="flex justify-center w-full">
        {/* STATE HANDLING */}
        {loading ? (
          <div className="aspect-square w-full max-w-[260px] flex items-center justify-center">
            <div className="animate-spin h-12 w-12 rounded-full border-b-2 border-blue-600" />
          </div>
        ) : error ? (
          <div className="aspect-square w-full max-w-[260px] flex items-center justify-center text-center">
            <p className="text-red-500">{error}</p>
          </div>
        ) : photoCards.length === 0 ? (
          <div className="aspect-square w-full max-w-[260px] flex items-center justify-center text-center">
            <p className="text-gray-500">No photo cards available</p>
          </div>
        ) : (
          /* RESPONSIVE CARD CONTAINER */
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[210px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px]">
              <Swiper
                effect="cards"
                slidesPerView={1}
                centeredSlides
                grabCursor
                autoplay={{
                  delay: 3500,
                  // disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                cardsEffect={{
                  rotate: false,
                  slideShadows: true,
                }}
                modules={[EffectCards, Autoplay]}
                className="w-full"
              >
                {photoCards.map((card) => (
                  <SwiperSlide key={card._id}>
                    <div className="relative aspect-square  rounded-md overflow-hidden shadow-2xl group">
                      {/* IMAGE */}
                      <Image
                        src={card.imageUrl}
                        alt={card.title}
                        fill
                        sizes="(max-width: 640px) 260px,
                               (max-width: 768px) 320px,
                               (max-width: 1024px) 350px,
                               400px"
                        className=" transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* GRADIENT */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      {/* TITLE */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-base sm:text-lg font-bold leading-tight line-clamp-2">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>

      {/* SEE MORE BUTTON */}
      <div className="flex justify-center mt-10">
        <Link href="/photo-card" className="w-full max-w-[220px]">
          <button className="w-full py-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PhotoCardsSlider;
