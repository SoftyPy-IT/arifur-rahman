
"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCreative } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

/* ---------- Types ---------- */
interface Banner {
  _id: string;
  thumbnailImage: string;
  title: string;
  toptitle: string;
  bottomtitle: string;
  isActive: boolean;
}

interface Props {
  initialBanners: Banner[];
}

/* ---------- Component ---------- */
export default function BannerClient({ initialBanners }: Props) {
  const [slides] = useState<Banner[]>(
    initialBanners.filter(b => b.isActive)
  );

  if (!slides.length) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-gray-100">
        <p className="text-gray-600 text-lg">
          No banners available
        </p>
      </div>
    );
  }

  return (
<section className="relative w-full pt-[77px] lg:pt-[90px]">
      <Swiper
        effect="creative"
        speed={1200}
        loop
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        navigation={{
          nextEl: ".banner-next",
          prevEl: ".banner-prev",
        }}
        creativeEffect={{
          prev: { shadow: true, translate: [0, 0, -400] },
          next: { translate: ["100%", 0, 0] },
        }}
        modules={[Autoplay, Navigation, EffectCreative]}
       className="w-full h-[300px] md:h-[400px] xl:h-[600px] 2xl:h-[800px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide._id}>
            <div className="relative w-full h-full">
               <Image
                  src={slide.thumbnailImage}
                  alt={`Slide ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end justify-center pb-10 text-center px-4">
                <div>
                  {slide.toptitle && (
                    <p className="text-white text-sm uppercase mb-2">
                      {slide.toptitle}
                    </p>
                  )}
                  <h2 className="text-white text-2xl md:text-4xl font-bold">
                    {slide.title}
                  </h2>
                  {slide.bottomtitle && (
                    <p className="text-gray-200 mt-2 max-w-2xl mx-auto">
                      {slide.bottomtitle}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation */}
        <button className="banner-prev absolute left-4 top-1/2 z-50 -translate-y-1/2 bg-black/60 p-2 rounded-full">
          <ChevronLeft className="text-white" />
        </button>

        <button className="banner-next absolute right-4 top-1/2 z-50 -translate-y-1/2 bg-black/60 p-2 rounded-full">
          <ChevronRight className="text-white" />
        </button>
      </Swiper>
    </section>
  );
}
