// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, EffectCreative } from "swiper/modules";
// // import Link from "next/link";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import useAxiosPublic from "@/hooks/useAxiosPublic";



// export default function HeroClient() {
//   const [slides, setSlides] = useState<Banner[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

// console.log(slides)

//   const axiosPublic = useAxiosPublic();


//   useEffect(() => {
//   const fetchBanners = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       const res = await axiosPublic.get(
//         "banners?limit=10&sort=-createdAt"
//       );

//       console.log('res',res)
//       // ✅ CORRECT extraction based on your response
//       const banners: Banner[] = res.data?.data || [];

//       console.log("Banner:", banners)
//       // Optional safety filter
//       const activeBanners = banners.filter(
//         (banner) => banner.isActive
//       );

//       setSlides(activeBanners);
//     } catch (err) {
//       console.error("Failed to fetch banners:", err);
//       setError("Failed to load banners");
//       setSlides([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchBanners();
// }, [axiosPublic]);


//   if (loading) {
//     return (
//       <div className="w-full h-[200px] md:h-[400px] xl:h-[600px] 2xl:h-[800px] bg-gray-200 animate-pulse flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading banners...</p>
//         </div>
//       </div>
//     );
//   }

//   // if (error) {
//   //   return (
//   //     <div className="w-full h-[200px] md:h-[400px] xl:h-[600px] 2xl:h-[800px] bg-gradient-to-r from-red-50 to-orange-50 flex items-center justify-center">
//   //       <div className="text-center p-8">
//   //         <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//   //           Unable to load banners
//   //         </h2>
//   //         <p className="text-gray-600 mb-6">{error}</p>
//   //         <button
//   //           onClick={fetchBanners}
//   //           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//   //         >
//   //           Try Again
//   //         </button>
//   //       </div>
//   //     </div>
//   //   );
//   // }

//   if (slides.length === 0) {
//     return (
//       <div className="w-full h-[200px] md:h-[400px] xl:h-[600px] 2xl:h-[800px] bg-gradient-to-r from-blue-50 to-cyan-50 flex items-center justify-center">
//         <div className="text-center p-8">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//             Welcome to Our Website
//           </h2>
//           <p className="text-gray-600 mb-6">No banners available yet</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <section className="relative w-full pt-[77px] lg:pt-[90px]">
//       <Swiper
//         effect="creative"
//         grabCursor={true}
//         speed={1200}
//         loop={true}
//         autoplay={{ delay: 4500, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         navigation={{
//           nextEl: ".hero-next",
//           prevEl: ".hero-prev",
//         }}
//         creativeEffect={{
//           prev: {
//             shadow: true,
//             translate: [0, 0, -400],
//           },
//           next: {
//             translate: ["100%", 0, 0],
//           },
//         }}
//         modules={[Autoplay, Navigation, EffectCreative]}
//         className="w-full h-[300px] md:h-[400px] xl:h-[600px] 2xl:h-[800px]"
//       >
//         {slides.map((slide: Banner, index: number) => (
//           <SwiperSlide key={slide._id}>
//             <div className="relative h-full w-full">
//               {/* Background Image */}
//               {slide.thumbnailImage && (
//                 <Image
//                   src={slide.thumbnailImage}
//                   alt={`Slide ${index + 1}`}
//                   fill
//                   priority={index === 0}
//                   className="object-cover"
//                   sizes="100vw"
//                 />
//               )}

//               {/* Overlay with #122238 color */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#122238]/60 via-[#122238]/30 to-transparent">
//                 <div className="max-w-7xl mx-auto px-4 h-full">
//                   <div className="h-full flex flex-col items-center justify-end pb-5 lg:pb-10 text-center md:space-y-2">
//                     {slide.toptitle && (
//                       <motion.h5
//                         className="text-white text-sm md:text-lg font-semibold uppercase tracking-wide"
//                         initial={{ y: 40, opacity: 0 }}
//                         whileInView={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 0.8, delay: 0.2 }}
//                       >
//                         {slide.toptitle}
//                       </motion.h5>
//                     )}

//                     {slide.title && (
//                       <motion.h1
//                         className="text-white text-lg md:text-4xl lg:text-5xl font-bold"
//                         initial={{ y: 40, opacity: 0 }}
//                         whileInView={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 0.8 }}
//                       >
//                         {slide.title}
//                       </motion.h1>
//                     )}

//                     {slide.bottomtitle && (
//                       <motion.p
//                         className="hidden md:block text-gray-200 text-base md:text-lg max-w-3xl"
//                         initial={{ y: 40, opacity: 0 }}
//                         whileInView={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 0.8, delay: 0.8 }}
//                       >
//                         {slide.bottomtitle}
//                       </motion.p>
//                     )}

//                     {/* <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.8, delay: 0.5 }}
//                     >
//                       <Link href="/about">
//                         <button className="bg-[#122238] text-white text-sm md:text-base p-1 md:p-2 rounded hover:bg-[#203b61]">
//                           আরও দেখুন
//                         </button>
//                       </Link>
//                     </motion.div> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}

//         {/* Navigation buttons with #122238 color */}
//         <button className="hero-prev cursor-pointer absolute left-4 top-1/2 z-50 -translate-y-1/2 bg-[#122238]/80 hover:bg-[#122238] md:p-3 rounded-full transition-all duration-300">
//           <ChevronLeft className="text-white md:w-6 md:h-6" />
//         </button>

//         <button className="hero-next cursor-pointer absolute right-4 top-1/2 z-50 -translate-y-1/2 bg-[#122238]/80 hover:bg-[#122238] md:p-3 rounded-full transition-all duration-300">
//           <ChevronRight className="text-white md:w-6 md:h-6" />
//         </button>
//       </Swiper>
//     </section>
//   );
// }


// components/Banner/Banner.tsx
import BannerClient from "./BannerClient";

interface Banner {
  _id: string;
  thumbnailImage: string;
  title: string;
  toptitle: string;
  bottomtitle: string;
  isActive: boolean;
}

async function getBanners(): Promise<Banner[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/banners`,
    {
      next: { revalidate: 300 }, 
    }
  );

  if (!res.ok) return [];

  const json = await res.json();
  return json.data || [];
}

export default async function Banner() {
  const banners = await getBanners();
  return <BannerClient initialBanners={banners} />;
}

