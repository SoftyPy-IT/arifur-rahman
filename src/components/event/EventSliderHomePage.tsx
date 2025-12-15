"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import EventCardItem from "./EventItemCart";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { TEvent } from "@/types/types";
import Image from "next/image";
import bgimg from "../../../public/Images/team-bg.jpg";
import Link from "next/link";

const EventSliderHomePage = () => {
  const axiosPublic = useAxiosPublic();
  const [events, setEvents] = useState([]);

  // Set limit higher (e.g., 10) to ensure the Swiper loop has enough slides
  // to copy for seamless transitions, which can also help resolve the issue.
  const limit = 10;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosPublic.get(
          `events?type=previous&limit=${limit}`
        );
        const { totalCount, data } = response?.data?.data;
        console.log(totalCount, data);
        setEvents(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [axiosPublic]);
  console.log(events);

  return (
    <>
      {/* Background Image Setup - FIXED */}
      <div className="relative h-[900px] w-full">
        <Image src={bgimg} alt="img" fill className="object-cover" priority />

        {/* Slider Content Overlay */}
        <div className="absolute top-0 left-0 w-full">
          <section className="container mx-auto px-4 py-16">
            {/* Title with Underline */}
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold text-blue-950 inline-block pb-3 border-b-4 border-blue-500">
                Recent Activities
              </h3>
            </div>

            <div className="flex justify-center items-center w-full">
              <Swiper
                key={events.length}
                effect={"coverflow"}
                speed={4000}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                spaceBetween={10}
                loop={true}
                grabCursor={true}
                // *** FIX APPLIED: Removed centeredSlides={true} from main props ***
                // This often fixes the delay/jump when looping with a small number of slides.

                slidesPerView={2}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper mb-10"
                breakpoints={{
                  1440: {
                    slidesPerView: 3,
                    // Removed centeredSlides: true
                  },
                  1024: {
                    slidesPerView: 3,
                    // Removed centeredSlides: true
                  },

                  768: {
                    slidesPerView: 2,
                    // Removed centeredSlides: true
                  },

                  640: {
                    slidesPerView: 1,
                    // Removed centeredSlides: true
                  },

                  320: {
                    slidesPerView: 1,
                    // Removed centeredSlides: true
                  },
                }}
              >
                {events?.map((event: TEvent, i) => (
                  <SwiperSlide
                    key={i}
                    className="py-14 sm:mx-10 sm:px-5 lg:mx-0 lg:px-0"
                  >
                    <EventCardItem event={event} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="flex justify-center ">
              <Link href="/events" className="group">
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
                    See More
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
          </section>
        </div>
      </div>
    </>
  );
};

export default EventSliderHomePage;
