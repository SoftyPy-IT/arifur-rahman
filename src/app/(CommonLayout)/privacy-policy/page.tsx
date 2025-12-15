"use client";
import React from "react";
import Link from "next/link";
import { FiMail, FiGlobe, FiShield } from "react-icons/fi";
import { FaUserShield, FaCookie, FaLock } from "react-icons/fa";
import { MdSecurity, MdPrivacyTip, MdOutlinePolicy } from "react-icons/md";

const PrivacyPolicyPage = () => {
  const privacySections = [
    {
      id: "info-collection",
      title: "১. তথ্য সংগ্রহ",
      icon: <FaUserShield className="w-6 h-6" />,
      content: "majumdararif.info ('ওয়েবসাইট') ব্যবহারকারীদের ব্যক্তিগত তথ্য সংগ্রহ করে শুধুমাত্র যোগাযোগ, সেবা প্রদান এবং ওয়েবসাইটের কার্যকারিতা উন্নত করার জন্য।",
      color: "bg-blue-50 border-blue-100"
    },
    {
      id: "data-collected",
      title: "২. সংগৃহীত তথ্যের বিবরণ",
      icon: <MdPrivacyTip className="w-6 h-6" />,
      content: [
        "• নাম ও যোগাযোগ তথ্য (ইমেইল, ফোন নম্বর)",
        "• যোগাযোগ ফর্মের মাধ্যমে প্রাপ্ত বার্তা",
        "• স্বেচ্ছায় প্রদানকৃত সামাজিক যোগাযোগ মাধ্যমের তথ্য",
        "• ওয়েবসাইট ব্যবহার সংক্রান্ত প্রযুক্তিগত তথ্য (কুকিজ, আইপি অ্যাড্রেস, ব্রাউজার টাইপ)"
      ],
      color: "bg-green-50 border-green-100"
    },
    {
      id: "data-usage",
      title: "৩. তথ্য ব্যবহারের উদ্দেশ্য",
      icon: <FiShield className="w-6 h-6" />,
      content: [
        "• ব্যবহারকারীর প্রশ্ন ও অভিযোগের উত্তর প্রদান",
        "• ওয়েবসাইটের কার্যকারিতা পর্যবেক্ষণ ও উন্নয়ন",
        "• নিরাপত্তা নিশ্চিতকরণ",
        "• ব্যবহারকারীর অভিজ্ঞতা উন্নত করা"
      ],
      color: "bg-purple-50 border-purple-100"
    },
    {
      id: "data-security",
      title: "৪. তথ্য সুরক্ষা ও সংরক্ষণ",
      icon: <FaLock className="w-6 h-6" />,
      content: "ব্যবহারকারীর তথ্য উপযুক্ত প্রযুক্তিগত ও প্রশাসনিক নিরাপত্তা ব্যবস্থার মাধ্যমে সুরক্ষিত থাকবে। তথ্য শুধুমাত্র প্রয়োজনীয় সময় পর্যন্ত সংরক্ষণ করা হবে।",
      color: "bg-red-50 border-red-100"
    },
    {
      id: "data-sharing",
      title: "৫. তথ্য শেয়ারিং নীতি",
      icon: <MdSecurity className="w-6 h-6" />,
      content: [
        "ব্যবহারকারীর ব্যক্তিগত তথ্য সাধারণত তৃতীয় পক্ষের সাথে শেয়ার করা হয় না, তবে নিম্নলিখিত ক্ষেত্রে ব্যতিক্রম হতে পারে:",
        "",
        "• আইনি বাধ্যবাধকতা বা আদালতের আদেশ সাপেক্ষে",
        "• ওয়েবসাইটের কারিগরি সেবাদাতাদের মাধ্যমে প্রক্রিয়াকরণের প্রয়োজন হলে",
        "• ব্যবহারকারীর স্পষ্ট সম্মতি থাকলে"
      ],
      color: "bg-yellow-50 border-yellow-100"
    },
    {
      id: "cookies",
      title: "৬. কুকিজ নীতি",
      icon: <FaCookie className="w-6 h-6" />,
      content: "ওয়েবসাইট ব্যবহারকারীর অভিজ্ঞতা উন্নত করতে কুকিজ ব্যবহার করতে পারে। ব্যবহারকারী তাদের ব্রাউজার সেটিংসের মাধ্যমে কুকিজ নিয়ন্ত্রণ করতে পারেন।",
      color: "bg-indigo-50 border-indigo-100"
    },
    {
      id: "third-party-links",
      title: "৭. তৃতীয় পক্ষের লিংক",
      icon: <FiGlobe className="w-6 h-6" />,
      content: "ওয়েবসাইটে অন্যান্য ওয়েবসাইটের লিংক থাকতে পারে। majumdararif.info এইসব ওয়েবসাইটের গোপনীয়তা নীতির জন্য দায়ী নয়।",
      color: "bg-cyan-50 border-cyan-100"
    },
    {
      id: "user-rights",
      title: "৮. ব্যবহারকারীর অধিকার",
      icon: <MdOutlinePolicy className="w-6 h-6" />,
      content: "ব্যবহারকারী তাদের ব্যক্তিগত তথ্য সম্পর্কে জানার, সংশোধন করার বা অপসারণের অনুরোধ করার অধিকার রাখেন।",
      color: "bg-orange-50 border-orange-100"
    },
    {
      id: "policy-updates",
      title: "৯. নীতি পরিবর্তন",
      icon: <FiMail className="w-6 h-6" />,
      content: "সময়ে সময়ে এই গোপনীয়তা নীতি আপডেট হতে পারে। গুরুত্বপূর্ণ পরিবর্তনগুলো ওয়েবসাইটে বিজ্ঞপ্তির মাধ্যমে জানানো হবে।",
      color: "bg-teal-50 border-teal-100"
    }
  ];

 

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full -translate-x-32 -translate-y-32 opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full translate-x-48 translate-y-48 opacity-20"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
           
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              গোপনীয়তা নীতি
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              আপনার তথ্য সুরক্ষা আমাদের অগ্রাধিকার। জানুন কিভাবে আমরা আপনার 
              গোপনীয়তা রক্ষা করি এবং তথ্য ব্যবস্থাপনা করি।
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                যোগাযোগ করুন
              </Link>
              <Link 
                href="/" 
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                মূল পাতায় ফিরে যান
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Introduction Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="p-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl">
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-white rounded-xl shadow-lg mb-4">
                      <FaLock className="w-12 h-12 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-900">আমাদের প্রতিশ্রুতি</h3>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">গোপনীয়তা সুরক্ষায় আমাদের দায়িত্ব</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  আপনার গোপনীয়তা আমাদের জন্য অত্যন্ত গুরুত্বপূর্ণ। এই নথিতে আমরা বিস্তারিতভাবে বর্ণনা করেছি 
                  কীভাবে আমরা আপনার তথ্য সংগ্রহ করি, ব্যবহার করি, সংরক্ষণ করি এবং সুরক্ষিত করি। 
                  আমাদের ওয়েবসাইট ব্যবহারের মাধ্যমে আপনি এই গোপনীয়তা নীতির শর্তাবলীতে সম্মতি প্রদান করেন।
                </p>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">প্রযোজ্য: কেবলমাত্র majumdararif.info ওয়েবসাইটের জন্য</span>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Policy Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {privacySections.map((section, index) => (
              <div 
                key={section.id}
                id={section.id}
                className={`rounded-xl border-2 ${section.color} p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 flex-1">{section.title}</h3>
                  <span className="text-sm font-semibold text-gray-500 bg-white/50 px-2 py-1 rounded">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                <div className="space-y-2">
                  {Array.isArray(section.content) ? (
                    section.content.map((line, lineIndex) => (
                      <p key={lineIndex} className={`text-gray-700 ${line === '' ? 'h-3' : ''}`}>
                        {line}
                      </p>
                    ))
                  ) : (
                    <p className="text-gray-700">{section.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact & Additional Info */}
          <div className="space-y-8">
            

            {/* Important Notice Card */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-amber-100 rounded-xl">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-800 mb-2">গুরুত্বপূর্ণ বিজ্ঞপ্তি</h3>
                  <p className="text-amber-700">
                    এই গোপনীয়তা নীতি শুধুমাত্র majumdararif.info ওয়েবসাইটের জন্য প্রযোজ্য। 
                    আমরা সময়ে সময়ে এই নীতি আপডেট করতে পারি। গুরুত্বপূর্ণ পরিবর্তনগুলো ওয়েবসাইটে বিজ্ঞপ্তির মাধ্যমে জানানো হবে।
                  </p>
                 
                </div>
              </div>
            </div>           
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;