/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { TManifesto } from "@/types/types";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import PostalVote from "./PostalVote/page";
import PhotoCardsSlider from "./PhotoCard/page";


export default function Manifesto() {
  const axiosPublic = useAxiosPublic();
  const [manifestos, setManifestos] = useState<TManifesto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axiosPublic.get("/manifestos");

        // Adjust based on your API response structure
        if (response.data.success) {
          if (Array.isArray(response.data.data)) {
            setManifestos(response.data.data);
          } else if (
            response.data.data?.data &&
            Array.isArray(response.data.data.data)
          ) {
            setManifestos(response.data.data.data);
          }
        }
      } catch (error) {
        console.error("Error fetching manifestos:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [axiosPublic]);

  // Get the latest manifesto (most recent date) - FIXED
  const latestManifesto =
    manifestos?.length > 0
      ? manifestos.sort(
          (a, b) => {
            // Handle undefined dates by using a fallback
            const dateA = a.date ? new Date(a.date).getTime() : 0;
            const dateB = b.date ? new Date(b.date).getTime() : 0;
            return dateB - dateA; // Sort descending (newest first)
          }
        )[0]
      : null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold inline-block pb-3 border-b-4 border-blue-500">
            Election Information
          </h2>
        </div>

        <div className="space-y-14">

          {/* Dynamic Manifesto Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

            {/* Content */}
            <div className="">
              {loading ? (
                <div className="space-y-4">
                  <div className="h-7 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
                </div>
              ) : latestManifesto ? (
                <>
                  <h3 className="text-4xl font-semibold text-gray-900">
                    {latestManifesto.title}
                  </h3>

                  <div className="mt-4">
                    <p className="text-gray-600 leading-relaxed max-w-lg">
                      {latestManifesto.shortDescription}
                    </p>

                    {/* PDF Links if available */}
                    {latestManifesto.pdfLinks &&
                      latestManifesto.pdfLinks.length > 0 && (
                        <div className="mt-4">
                          {/* You can add PDF links here if needed */}
                        </div>
                      )}

                    
                  </div>

                  <Link
                    href={"/election-manifesto"}
                    className="inline-flex mt-6"
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700">
                      বিস্তারিত দেখুন
                      <FaArrowRight className="text-xs" />
                    </span>
                  </Link>
                </>
              ) : (
                <>
                  
                </>
              )}
            </div>

           <PhotoCardsSlider/>
          </div>

         <PostalVote/>
        </div>
      </div>
    </section>
  );
}