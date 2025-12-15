/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import useFeatures from "@/hooks/useFeatures";
import { TContact } from "@/types/types";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa";

type TContactData = {
  contact: TContact;
  isLoading: any;
};

const Contact = () => {
  const { contact, isLoading }: TContactData = useFeatures();
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div 
      style={{ backgroundImage: `url(${contact?.bgImageUrl})` }}
      className="relative min-h-screen bg-cover bg-center bg-fixed"
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Side - Contact Information */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 pb-3 border-b-2 border-blue-500 inline-block">
              Contact Information
            </h2>
            
            <div className="space-y-6 mb-8">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FaMapMarkerAlt className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">{contact?.address || "Dhaka, Bangladesh"}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <FaPhone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone Number</h3>
                  <p className="text-gray-600">{contact?.phone || "+880 XXXX XXXXXX"}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-100 rounded-lg">
                  <FaEnvelope className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email Address</h3>
                  <p className="text-gray-600">{contact?.email || "contact@example.com"}</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  href={contact?.facebookUrl || "#"}
                  target="_blank"
                  className="p-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <FaFacebook className="w-5 h-5" />
                </Link>
                <Link
                  href={contact?.LinkedInUrl || "#"}
                  target="_blank"
                  className="p-3 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition-colors"
                >
                  <FaLinkedin className="w-5 h-5" />
                </Link>
                <Link
                  href={contact?.youTubeUrl || "#"}
                  target="_blank"
                  className="p-3 bg-red-100 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-colors"
                >
                  <FaYoutube className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
            
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <FaPaperPlane className="w-4 h-4" />
              </button>
            </form>

            {/* Form Note */}
            <p className="text-gray-600 text-sm mt-6 text-center">
              We&apos;ll respond to your message within 24 hours.
            </p>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default Contact;