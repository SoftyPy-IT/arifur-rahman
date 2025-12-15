"use client";
import useFeatures from "@/hooks/useFeatures";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
// import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

// Import your images
import shape1 from "../../public/Images/shape-1.svg";
import shape3 from "../../public/Images/shape-3.svg";

const Footer = () => {
  const { contact, banner, company, isLoading } = useFeatures();

  if (isLoading) return null;

  const currentYear = new Date().getFullYear();

  // Navigation sections
  const navigationSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Events", href: "/events" },
        { label: "Gallery", href: "/gallery" },
      ]
    },
    {
      title: "Resources",
      links: [
        // { label: "Media", href: "/media" },
        
        { label: "Articles", href: "/articles" },
        { label: "Videos", href: "/media" },
        // { label: "Publications", href: "/publications" },
        // { label: "News", href: "/news" },
        { label: "Contact", href: "/contact" },
      ]
    },
    {
      title: "Company",
      links: [
        // { label: "Privacy Policy", href: "https://www.shouravgroup-bd.com/privacy-policy/" },
        // { label: "Terms of Service", href: "/terms" },
        // { label: "Cookie Policy", href: "/cookies" },
        { label: company?.companyName || "Company", href: company?.websiteUrl || "#" },
      ]
    }
  ];

  // Social media links
  const socialLinks = [
    { 
      icon: FaFacebook, 
      href: contact?.facebookUrl || "#", 
      label: "Facebook",
      color: "hover:bg-[#1877F2]"
    },
    { 
      icon: FaLinkedin, 
      href: contact?.LinkedInUrl || "#", 
      label: "LinkedIn",
      color: "hover:bg-[#0077B5]"
    },
    { 
      icon: FaYoutube, 
      href: contact?.youTubeUrl || "#", 
      label: "YouTube",
      color: "hover:bg-[#FF0000]"
    },
    // { 
    //   icon: FaXTwitter, 
    //   href: contact?.twitterUrl || "#", 
    //   label: "Twitter",
    //   color: "hover:bg-black"
    // },
    // { 
    //   icon: FaInstagram, 
    //   href: contact?.instagramUrl || "#", 
    //   label: "Instagram",
    //   color: "hover:bg-gradient-to-r from-purple-500 to-pink-500"
    // },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0d1a2e] to-[#122238] text-gray-100 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={shape1}
          alt="Decorative shape"
          className="absolute -left-10 bottom-0 w-48 md:w-64 opacity-20"
        />
        <Image
          src={shape3}
          alt="Decorative shape"
          className="absolute -right-10 bottom-0 w-48 md:w-64 opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-4">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {banner?.name}
                </h2>
                <div 
                  className="text-gray-300 mt-2 max-w-md"
                  dangerouslySetInnerHTML={{ __html: banner?.designation || "" }}
                />
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3 mt-6">
                {contact?.phone && (
                  <div className="flex items-center gap-3 group">
                    <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <FiPhone className="w-4 h-4 text-blue-400" />
                    </div>
                    <Link 
                      href={`tel:${contact.phone}`}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {contact.phone}
                    </Link>
                  </div>
                )}
                
                {contact?.email && (
                  <div className="flex items-center gap-3 group">
                    <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <FiMail className="w-4 h-4 text-blue-400" />
                    </div>
                    <Link 
                      href={`mailto:${contact.email}`}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {contact.email}
                    </Link>
                  </div>
                )}
                
                {contact?.address && (
                  <div className="flex items-center gap-3 group">
                    <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors ">
                      <FiMapPin className="w-4 h-4 text-blue-400" />
                    </div>
                    <Link 
                      href={contact.address}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {contact.address}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          {navigationSections.map((section, index) => (
            <div key={index} className="flex md:block flex-col items-center">
              <h3 className="font-bold text-lg mb-4 pb-2 border-b border-blue-500/30 inline-block ">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Social Media */}
            <div className="flex flex-col items-center lg:items-start">
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    aria-label={social.label}
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="w-full lg:w-auto">
              <div className="max-w-md mx-auto lg:mx-0">
                <h4 className="font-semibold mb-4 text-center lg:text-right">Stay Updated</h4>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-2 md:px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                  <button
                    type="submit"
                    className="px-1 md:px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Arifur Rahman. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              
            </div>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;