"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";

export default function PostalVotePage() {
  return (
    <section className="py-16 bg-gray-50 pt-32">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title Image */}
        <div className="flex justify-center  mb-10">
          <Image
            src="/Images/postal/postal.png"
            alt="Postal Voting System"
            height={900}
            width={600}
            className=""
          />
        </div>

        {/* Page Header */}
        <div className="mb-10 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            Postal Vote BD মোবাইল অ্যাপে ঠিকানা কিভাবে লিখতে হবে
            <span className="block text-lg font-medium text-gray-600 mt-2">
              (নমুনাসহ)
            </span>
          </h1>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 mb-8">
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
            <strong>গুরুত্বপূর্ণ নির্দেশনা:</strong> ঠিকানা অবশ্যই
            <strong> ইংরেজিতে</strong> পূরণ করতে হবে। প্রয়োজনে কারো সহায়তা নিয়ে
            সঠিকভাবে ঠিকানা পূরণ করুন।
          </p>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-5">
            ঠিকানা লেখার ক্ষেত্রে যে সকল সতর্কতা অবলম্বন করতে হবে
          </h2>

          <ol className="space-y-4 list-decimal list-inside text-gray-700 leading-relaxed">
            <li>
              প্রবাসী যে ঠিকানায় বর্তমানে অবস্থান করছেন, সেই ঠিকানাটি ব্যবহার
              করতে হবে। বাংলাদেশের ঠিকানা ব্যবহার করবেন না।
            </li>
            <li>
              <strong>#, @</strong> সহ কোনো বিশেষ অক্ষর ব্যবহার করবেন না।
            </li>
            <li>
              Road, Building, Block, City, State, Province ইত্যাদি সঠিকভাবে উল্লেখ করতে হবে।
            </li>
            <li>
              Postal Code / Zip Code ঘরে শুধুমাত্র সঠিক কোড উল্লেখ করতে হবে।
            </li>
          </ol>
        </div>

        {/* Sample Images */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            ঠিকানার নমুনা
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="relative h-full rounded-lg overflow-hidden border">
              <Image
                src="/Images/postal/saudi.jpg" 
                alt="Address Sample 1"
                width={900}
                height={900}
                className="object-cover"
              />
            </div>

            <div className="relative h-full rounded-lg overflow-hidden border">
              <Image
                src="/Images/postal/qatar.jpg"
                alt="Address Sample 2"
                width={900}
                height={900}
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="relative h-full rounded-lg overflow-hidden border">
              <Image
                src="/Images/postal/Kuwait.jpg" 
                alt="Address Sample 1"
                width={900}
                height={900}
                className="object-cover"
              />
            </div>

            <div className="relative h-full rounded-lg overflow-hidden border">
              <Image
                src="/Images/postal/dubai.jpg"
                alt="Address Sample 2"
                width={900}
                height={900}
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-full rounded-lg overflow-hidden border">
              <Image
                src="/Images/postal/Bahrain.jpg" 
                alt="Address Sample 1"
                width={900}
                height={900}
                className="object-cover"
              />
            </div>

            <div className="relative h-full rounded-lg overflow-hidden border">
              <Image
                src="/Images/postal/malaysia.jpg"
                alt="Address Sample 2"
                width={900}
                height={900}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* PDF / External Links */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            PDF / Circular ডাউনলোড
          </h2>

          <div className="space-y-3">
            <Link
              href="https://www.ecs.gov.bd/bec/public/files/Postal%20Voting/OCV_Postal%20Vote_BD_compressed.pdf"
              target="_blank"
              className="flex items-center gap-3 text-sm font-medium text-red-600 hover:text-red-700"
            >
              <FaFilePdf /> Instruction for Postal Voting registration schedule using Mobile App (OCV)
            </Link>

            <Link
              href="https://www.ecs.gov.bd/bec/public/files/Postal%20Voting/ICV_Postal%20Vote_BD2_compressed.pdf"
              target="_blank"
              className="flex items-center gap-3 text-sm font-medium text-red-600 hover:text-red-700"
            >
              <FaFilePdf /> Instruction for Postal Voting registration schedule using Mobile App (ICPV)
            </Link>

            <Link
              href="https://www.ecs.gov.bd/files/JjPAukrNEqv8M3llPnI2d2rKJXOlIfWH6QkZTAJI.pdf"
              target="_blank"
              className="flex items-center gap-3 text-sm font-medium text-red-600 hover:text-red-700"
            >
              <FaFilePdf /> Circular for Out of Country Voting (OCV)
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
