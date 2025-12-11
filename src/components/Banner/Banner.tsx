import React from "react";
import "../navbar/navbar.css";
import Link from "next/link";
import { TBanner } from "@/types/types";
import shongshod from "../../../public/Images/steptodown-Photoroom.png";
import Image from "next/image";

const Banner = async ({ bannerData }: { bannerData: TBanner }) => {
  console.log(bannerData);
  return (
    <div>
      <div className="relative w-full min-h-[600px] md:h-[650px] lg:h-[700px] xl:h-[750px] overflow-hidden bg-[#fffff9]">
        {/* Background overlay */}
        <div className="absolute inset-0 z-10"></div>

        {/* Background pattern - Responsive positioning */}
        <div className="absolute right-0 bottom-0 w-full md:w-auto">
          <Image
            src={shongshod}
            alt="Banner Background" 
            className="h-[400px] sm:h-[450px] md:h-[500px] lg:h-[570px] w-full md:w-auto object-contain md:object-right-bottom"
            priority
          />
        </div>

        {/* Banner content */}
        <div className="relative flex justify-center items-center h-full pt-10 md:pt-16 lg:pt-20">
          <div className="flex flex-col lg:flex-row justify-between items-center z-20 text-center w-full max-w-7xl mx-auto px-4 md:px-8">
            
            {/* Mobile Image */}
            <div className="lg:hidden mb-6 md:mb-8">
              <Image
                src={bannerData?.image || ""}
                alt="Banner Image"
                height={400}
                width={400}
                className="h-[250px] w-[250px] md:h-[300px] md:w-[300px] rounded-full border-4 border-white shadow-lg z-10"
              />
            </div>

            {/* Text Content */}
            <div className="pt-4 lg:pt-10 lg:w-1/2">
              <h1
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1000"
                className="md:mb-4 mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight"
              >
                {bannerData?.name}
              </h1>
              
              <h3
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="1000"
                className="mb-3 md:mb-4 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-black"
              >
                {bannerData?.designation}
              </h3>
              
              <h3
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="1000"
                className="mb-5 md:mb-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-black"
              >
                {bannerData?.partyname}
              </h3>
              
              <Link
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="1000"
                href="/about"
              >
                <button className="hover-border-button px-6 py-2 md:px-8 md:py-3 text-sm md:text-base lg:text-lg">
                  About Me
                </button>
              </Link>
            </div>

            {/* Desktop Image */}
            <div className="hidden lg:block lg:w-1/2 flex justify-center lg:justify-end">
              <Image
                src={bannerData?.image || ""}
                alt="Banner Image"
                height={600}
                width={600}
                className="h-[350px] w-[350px] lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px] rounded-full border-4 lg:border-8 border-white shadow-xl z-10 mt-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;