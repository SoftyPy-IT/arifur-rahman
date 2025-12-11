"use client";
import useFeatures from "@/hooks/useFeatures";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import shape1 from "../../public/Images/shape-1.svg";
import shape3 from "../../public/Images/shape-3.svg";

const Footer = () => {
  const { contact, banner, company, isLoading } = useFeatures();

  if (isLoading) return null;

  return (
    <footer className="relative bg-[#122238] text-gray-100 overflow-hidden">
      {/* Decorative shapes */}
      <Image
        src={shape1}
        alt="shape left"
        className="absolute left-0 bottom-0 w-32 opacity-70"
      />
      <Image
        src={shape3}
        alt="shape right"
        className="absolute right-0 bottom-0 w-32 opacity-40"
      />

      <div className="container mx-auto px-6 py-10 relative z-10 grid gap-10 lg:grid-cols-4">
        {/* Banner / Logo */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-2xl md:text-3xl font-bold">{banner?.name}</p>
          <p
            className="text-sm mt-1"
            dangerouslySetInnerHTML={{ __html: banner?.designation || "" }}
          ></p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="uppercase font-semibold mb-2">Visit</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/articles">Articles</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/media">Videos</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="uppercase font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href={company?.websiteUrl || "#"} target="_blank">
                {company?.companyName}
              </Link>
            </li>
            <li>
              <Link
                href="https://www.shouravgroup-bd.com/privacy-policy/"
                target="_blank"
              >
                Privacy & Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="uppercase font-semibold mb-2">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FiPhone className="text-white w-5 h-5" />
              <Link href={`tel:${contact?.phone || ""}`}>
                {contact?.phone}
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-white w-5 h-5" />
              <Link href={`mailto:${contact?.email || ""}`}>
                {contact?.email}
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-white w-5 h-5" />
              <Link href={contact?.address || "#"}>{contact?.address}</Link>
            </li>
          </ul>

          <div className="flex gap-2 mt-4">
            <Link
              href={contact?.facebookUrl || "#"}
              target="_blank"
              className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-gray-700 hover:bg-[#1877F2] hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32 32"
                className="w-4 h-4"
              >
                <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
              </svg>
            </Link>
            <Link
              href={contact?.LinkedInUrl || "#"}
              target="_blank"
              className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-gray-700 hover:bg-[#0077B5] hover:text-white transition-colors"
            >
              <FaLinkedin className="text-sm" />
            </Link>
            <Link
              href={contact?.youTubeUrl || "#"}
              target="_blank"
              className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-gray-700 hover:bg-[#FF0000] hover:text-white transition-colors"
            >
              <FaYoutube className="text-sm" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="py-6 text-center text-sm text-gray-400 border-t border-gray-700">
        © {new Date().getFullYear()} Arifur Rahman. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
