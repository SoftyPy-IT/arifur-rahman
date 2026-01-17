// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, EffectCreative } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { TBanner } from "@/types/types";



// export default function HeroClient() {
//   const [slides, setSlides] = useState<TBanner[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://server.majumdararif.info/api/v1/banners")
//       .then(res => res.json())
//       .then(res => {
//         const active = (res.data || []).filter((b: TBanner) => b.isActive);
//         setSlides(active);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   /* ✅ SKELETON — NO WHITE FLASH */
//   if (loading) {
//     return (
//       <section className="w-full pt-[77px] lg:pt-[90px]">
//         <div className="w-full h-[300px] md:h-[400px] xl:h-[600px] 2xl:h-[800px] bg-gray-200 animate-pulse" />
//       </section>
//     );
//   }

//   if (!slides.length) return null;

//   return (
//     <section className="relative w-full pt-[77px] lg:pt-[90px]">
//       <Swiper
//         loop
//         autoplay={{ delay: 4500, disableOnInteraction: false }}
//         navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
//         effect="creative"
//         modules={[Autoplay, Navigation, EffectCreative]}
//         className="w-full h-[300px] md:h-[400px] xl:h-[600px] 2xl:h-[800px]"
//       >
//         {slides.map(slide => (
//           <SwiperSlide key={slide._id}>
//             <div className="relative w-full h-full">
//               {/* Background Image */}
//               <Image
//                 src={slide.thumbnailImage}
//                 alt={slide.title}
//                 fill
//                 priority
//                 className="object-cover"
//               />

//               {/* ✅ TEXT OVERLAY */}
//               <div className="absolute inset-0 ">
//                 <div className="max-w-7xl mx-auto h-full px-4 flex flex-col items-center justify-end pb-6 text-center">
//                   {slide.toptitle && (
//                     <p className="text-white text-sm md:text-lg uppercase tracking-wider">
//                       {slide.toptitle}
//                     </p>
//                   )}

//                   {slide.title && (
//                     <h1 className="text-white text-xl md:text-4xl lg:text-5xl font-bold mt-2">
//                       {slide.title}
//                     </h1>
//                   )}

//                   {slide.bottomtitle && (
//                     <p className="hidden md:block text-gray-200 max-w-3xl mt-2">
//                       {slide.bottomtitle}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}

//         {/* Navigation */}
//         <button className="hero-prev absolute left-4 top-1/2 z-50 -translate-y-1/2 bg-black/60 p-2 rounded-full">
//           <ChevronLeft className="text-white" />
//         </button>

//         <button className="hero-next absolute right-4 top-1/2 z-50 -translate-y-1/2 bg-black/60 p-2 rounded-full">
//           <ChevronRight className="text-white" />
//         </button>
//       </Swiper>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { TBanner } from "@/types/types";

export default function Banner() {
  const [banners, setBanners] = useState<TBanner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/banners`
        );

        if (!res.ok) return;

        const json = await res.json();
        setBanners((json.data || []).filter((b: TBanner) => b.isActive));
      } catch (e) {
        console.error("Banner fetch failed", e);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  /* ✅ Skeleton — NO WHITE SCREEN */
  if (loading) {
    return (
      <section className="w-full pt-[77px] lg:pt-[90px]">
        <div className="w-full h-[300px] md:h-[400px] xl:h-[600px] bg-gray-200 animate-pulse" />
      </section>
    );
  }

  if (!banners.length) return null;

  return (
    <section className="relative w-full pt-[77px] lg:pt-[90px]">
      <Swiper
        loop
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        navigation={{ nextEl: ".bn-next", prevEl: ".bn-prev" }}
        modules={[Autoplay, Navigation]}
        className="w-full h-[300px] md:h-[400px] xl:h-[750px]"
      >
        {banners.map((b) => (
          <SwiperSlide key={b._id}>
            <div className="relative w-full h-full">
              <Image
                src={b.thumbnailImage}
                alt={b.title}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />

              {/* TEXT */}
              <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-end pb-6 text-center px-4">
                {b.toptitle && (
                  <p className="text-white uppercase text-sm">{b.toptitle}</p>
                )}
                <h1 className="text-white text-2xl md:text-4xl font-bold mt-2">
                  {b.title}
                </h1>
                {b.bottomtitle && (
                  <p className="hidden md:block text-gray-200 mt-2 max-w-2xl">
                    {b.bottomtitle}
                  </p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* NAV */}
        <button className="bn-prev absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/60 p-2 rounded-full">
          <ChevronLeft className="text-white" />
        </button>
        <button className="bn-next absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/60 p-2 rounded-full">
          <ChevronRight className="text-white" />
        </button>
      </Swiper>
    </section>
  );
}

