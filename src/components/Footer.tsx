"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import useFeatures from "@/hooks/useFeatures";
import { TBanner, TCompany, TContact } from "@/types/types";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import shape1 from "../../public/Images/shape-1.svg";
import shape3 from "../../public/Images/shape-3.svg";

type TFooterInfo = {
  banner: TBanner;
  company: TCompany;
  contact: TContact;
  isLoading: any;
};

const Footer = () => {
  const { contact, banner, company, isLoading }: TFooterInfo = useFeatures();
  return (
    <footer className="px-4 divide-y bg-[#122238] text-gray-100 relative overflow-hidden">
      {!isLoading && (
        <>
          <Image
            src={shape1}
            alt="left shape"
            className="absolute left-0 bottom-0 opacity-100 z-0"
          />
          <Image
            src={shape3}
            alt="right shape"
            className="absolute right-0 bottom-0 opacity-40 z-0 h-full"
          />

          <div className="container relative z-10 flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
            <div className="lg:w-1/3">
              <Link
                rel="noopener noreferrer"
                href="#"
                className="flex flex-col justify-center items-center text-center lg:text-start space-x-3 lg:justify-start"
              >
                <div className="">
                  <p className=" text-2xl md:text-4xl lg:text-2xl font-bold">
                    {banner?.name}
                  </p>
                  <p className="text-sm" dangerouslySetInnerHTML={{
                  __html: banner?.designation as string,
                }}></p>
                  {/* <p className="text-sm">{banner?.partyname}</p> */}
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-2 text-sm gap-x-2 gap-y-8 lg:w-[1400px] sm:grid-cols-4">
              <div className="space-y-3">
                <h3 className="tracking-wide uppercase dark:text-gray-900 font-semibold">
                  Visit
                </h3>
                <ul className="space-y-1">
                  <li>
                    <Link rel="noopener noreferrer" href="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link rel="noopener noreferrer" href="/articles">
                      Articles
                    </Link>
                  </li>
                  <li>
                    <Link rel="noopener noreferrer" href="/events">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link rel="noopener noreferrer" href="gallery">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link rel="noopener noreferrer" href="/media">
                      Videos
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="tracking-wide uppercase dark:text-gray-900 font-semibold">
                  Company
                </h3>
                <ul className="space-y-1">
                  <li>
                    <Link
                      rel="noopener noreferrer"
                      href={company?.websiteUrl}
                      target="_blank"
                    >
                      {company?.companyName}
                    </Link>
                  </li>

                  <li>
                    <Link
                      rel="noopener noreferrer"
                      href="https://www.shouravgroup-bd.com/privacy-policy/"
                      target="_blank"
                    >
                      Privacy & Policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-3 lg:w-[400px]">
                <h3 className="uppercase dark:text-gray-900 font-semibold">
                  Contact
                </h3>
                <ul className="space-y-3">
                  {/* Phone */}
                  <li className="flex items-center space-x-3">
                    <div className="flex items-center justify-center text-gray-700 transition-colors duration-300 ">
                      <FiPhone className="text-lg text-white w-5 h-5 " />
                    </div>
                    <Link
                      href={`tel:${contact?.phone || ""}`}
                      className="hover:text-orange-500 transition-colors"
                    >
                      {contact?.phone}
                    </Link>
                  </li>

                  {/* Email */}
                  <li className="flex items-center space-x-3">
                    <div className="flex items-center justify-center   text-gray-700 transition-colors duration-300">
                      <FiMail className="text-lg text-white w-5 h-5" />
                    </div>
                    <Link
                      href={`mailto:${contact?.email || ""}`}
                      className="hover:text-orange-500 transition-colors"
                    >
                      {contact?.email}
                    </Link>
                  </li>

                  {/* Address */}
                  <li className="flex items-center space-x-3">
                    <div className="flex items-center justify-center text-gray-700 transition-colors duration-300">
                      <FaMapMarkerAlt className="text-lg text-white w-5 h-5" />
                    </div>
                    <Link
                      href={contact?.address || "#"}
                      className="hover:text-orange-500 transition-colors"
                    >
                      {contact?.address}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="uppercase dark:text-gray-900 font-semibold">
                  Social media
                </div>
                <div className="flex justify-start space-x-3">
                  {/* Facebook */}
                  <Link
                    rel="noopener noreferrer"
                    href={contact?.facebookUrl as string}
                    target="_blank"
                    title="Facebook"
                    className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-gray-700 transition-colors duration-300 hover:bg-[#1877F2] hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      className="w-5 h-5"
                    >
                      <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                    </svg>
                  </Link>

                  {/* LinkedIn */}
                  <Link
                    rel="noopener noreferrer"
                    href={contact?.LinkedInUrl as string}
                    title="Linkedin"
                    className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-gray-700 transition-colors duration-300 hover:bg-[#0077B5] hover:text-white"
                  >
                    <FaLinkedin className="text-xl" />
                  </Link>

                  {/* YouTube */}
                  <Link
                    rel="noopener noreferrer"
                    href={contact?.youTubeUrl as string}
                    title="YouTube"
                    className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-gray-700 transition-colors duration-300 hover:bg-[#FF0000] hover:text-white"
                  >
                    <FaYoutube className="text-xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="py-6 text-sm text-center dark:text-gray-600">
        © {new Date().getFullYear()} Arifur Rahman. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
