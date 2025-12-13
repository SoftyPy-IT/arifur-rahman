import React from "react";
import "../navbar/navbar.css";
import Link from "next/link";
import { TBanner } from "@/types/types";
import shongshod from "../../../public/Images/steptodown-Photoroom.png";
import Image from "next/image";

const Navbar = async ({ bannerData }: { bannerData: TBanner }) => {
  console.log(bannerData);
  return (
    <div>
      <div className="relative w-full  ">
        {/* bg img */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={shongshod}
            alt="Banner Image"
            fill
            className="object-cover "
          />
        </div>

        {/* banner */}
        <div className=" flex justify-center items-center mt-10">
          <div className="flex flex-col lg:flex-row justify-between items-center z-10 text-center">
            <div className="lg:hidden mt-2">
              <Image
                src={bannerData?.imageUrl || ""}
                // src={image1}
                alt="Banner Image"
                height={500}
                width={500}
                className="h-full w-[250px] lg:w-[500px] z-10  "
              />
            </div>
            <div className="py-4 lg:pt-10">
              <h1
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1000"
                className="md:mb-5 mb-2 text-4xl font-bold text-black"
              >
                {bannerData?.name}
              </h1>
              <h3
                dangerouslySetInnerHTML={{
                  __html: bannerData?.designation as string,
                }}
                className="mb-5 text-sm md:text-xl 2xl:text-2xl text-black"
              ></h3>

              <Link
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="1000"
                href="/about"
              >
                <button className="hover-border-button ">About Me</button>
              </Link>
            </div>
            <div className="hidden lg:block">
              <Image
                src={bannerData?.imageUrl || ""}
                // src={image1}
                alt="Banner Image"
                height={500}
                width={500}
                className="h-full w-[300px] lg:w-[550px] z-10 mt-3 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
