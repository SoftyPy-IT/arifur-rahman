"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCreative } from "swiper/modules";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@mui/material";

interface Banner {
  _id: string;
  thumbnailImage: string;
  title: string;
  toptitle: string;
  bottomtitle: string;
  isActive: boolean;
}

export default function HeroClient() {
  const [slides, setSlides] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Adjust the API endpoint according to your server
      const response = await fetch('http://localhost:5010/api/v1/banners');
      // const response = await fetch('https://server.majumdararif.info/api/v1/banners');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      // Extract data based on your API response structure
      const banners = result.data || result || [];
      
      // Filter only active banners
      const activeBanners = banners.filter((banner: Banner) => banner.isActive);
      setSlides(activeBanners);
      
    } catch (error) {
      console.error("Failed to fetch banners:", error);
      setError("Failed to load banners");
      setSlides([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full h-[200px] md:h-[400px] xl:h-[600px] 2xl:h-[800px] bg-gray-200 animate-pulse flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading banners...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-[200px] md:h-[400px] xl:h-[600px] 2xl:h-[800px] bg-gradient-to-r from-red-50 to-orange-50 flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Unable to load banners
          </h2>
          <p className="text-gray-600 mb-6">
            {error}
          </p>
          <button 
            onClick={fetchBanners}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (slides.length === 0) {
    return (
      <div className="w-full h-[200px] md:h-[400px] xl:h-[600px] 2xl:h-[800px] bg-gradient-to-r from-blue-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Welcome to Our Website
          </h2>
          <p className="text-gray-600 mb-6">
            No banners available yet
          </p>
        </div>
      </div>
    );
  }

   return (
    <section className="relative w-full">
      <Swiper
        effect="creative"
        grabCursor={true}
        speed={1200}
        loop={true}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[Autoplay, Navigation, EffectCreative]}
        className="w-full h-[200px] md:h-[400px] xl:h-[600px] 2xl:h-[800px]"
      >
        {slides.map((slide: Banner, index: number) => (
          <SwiperSlide key={slide._id}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              {slide.thumbnailImage && (
                <Image
                  src={slide.thumbnailImage}
                  alt={`Slide ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                />
              )}

              {/* Overlay with #122238 color */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#122238]/60 via-[#122238]/30 to-transparent">
                <div className="max-w-7xl mx-auto px-4 h-full">
                  <div className="h-full flex flex-col items-center justify-end pb-5 lg:pb-10 text-center md:space-y-2">
                    {slide.toptitle && (
                      <motion.h5
                        className="text-white text-sm md:text-lg font-semibold uppercase tracking-wide"
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        {slide.toptitle}
                      </motion.h5>
                    )}

                    {slide.title && (
                      <motion.h1
                        className="text-white text-2xl md:text-4xl lg:text-5xl font-bold"
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                      >
                        {slide.title}
                      </motion.h1>
                    )}

                    {slide.bottomtitle && (
                      <motion.p
                        className="hidden md:block text-gray-200 text-base md:text-lg max-w-3xl"
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                      >
                        {slide.bottomtitle}
                      </motion.p>
                    )}

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      <Link href="/about">
                        <Button
                          variant="outlined"
                          sx={{
                            backgroundColor: '#122238',
                            color: 'white',
                            borderColor: '#122238',
                            '&:hover': {
                              backgroundColor: '#0f1c30',
                              borderColor: '#0f1c30',
                            },
                            fontSize: '1.125rem',
                            padding: '0.5rem 2rem',
                            marginTop: '1rem',
                            fontWeight: '600',
                          }}
                        >
                          আরও দেখুন
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation buttons with #122238 color */}
        <button className="hero-prev cursor-pointer absolute left-4 top-1/2 z-50 -translate-y-1/2 bg-[#122238]/80 hover:bg-[#122238] md:p-3 rounded-full transition-all duration-300">
          <ChevronLeft className="text-white md:w-6 md:h-6" />
        </button>

        <button className="hero-next cursor-pointer absolute right-4 top-1/2 z-50 -translate-y-1/2 bg-[#122238]/80 hover:bg-[#122238] md:p-3 rounded-full transition-all duration-300">
          <ChevronRight className="text-white md:w-6 md:h-6" />
        </button>
      </Swiper>
    </section>
  );
}