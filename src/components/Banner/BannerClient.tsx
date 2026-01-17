// "use client";

// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { TBanner } from "@/types/types";

// interface Props {
//   banners: TBanner[];
// }

// export default function BannerClient({ banners }: Props) {
//   /* ✅ Skeleton — NO WHITE SCREEN */
//   if (!banners.length) {
//     return (
//       <section className="w-full pt-[77px] lg:pt-[90px]">
//         <div className="w-full h-[300px] md:h-[400px] xl:h-[600px] bg-gray-200 animate-pulse" />
//       </section>
//     );
//   }

//   return (
//     <section className="relative w-full pt-[77px] lg:pt-[90px]">
//       <Swiper
//         loop
//         autoplay={{ delay: 4500 }}
//         navigation={{ nextEl: ".bn-next", prevEl: ".bn-prev" }}
//         modules={[Autoplay, Navigation]}
//         className="w-full h-[300px] md:h-[400px] xl:h-[600px]"
//       >
//         {banners.map((b) => (
//           <SwiperSlide key={b._id}>
//             <div className="relative w-full h-full">
//               <Image
//                 src={b.thumbnailImage}
//                 alt={b.title}
//                 fill
//                 priority
//                 className="object-cover"
//               />

//               {/* TEXT */}
//               <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-end pb-6 text-center px-4">
//                 {b.toptitle && (
//                   <p className="text-white uppercase text-sm">{b.toptitle}</p>
//                 )}
//                 <h1 className="text-white text-2xl md:text-4xl font-bold mt-2">
//                   {b.title}
//                 </h1>
//                 {b.bottomtitle && (
//                   <p className="hidden md:block text-gray-200 mt-2 max-w-2xl">
//                     {b.bottomtitle}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}

//         {/* NAV */}
//         <button className="bn-prev absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/60 p-2 rounded-full">
//           <ChevronLeft className="text-white" />
//         </button>
//         <button className="bn-next absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/60 p-2 rounded-full">
//           <ChevronRight className="text-white" />
//         </button>
//       </Swiper>
//     </section>
//   );
// }
