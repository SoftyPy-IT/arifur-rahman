"use client";
import React, { useEffect, useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import Image from "next/image";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { TPlan } from "@/types/types";
import { useParams } from "next/navigation";
import Link from "next/link";
import ShareButtons from "./ShareButtons";
import RelatedPlans from "./RelatedPlan";

const PlanDetailsPage = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const [plan, setPlan] = useState<TPlan | null>(null);
  const [loading, setLoading] = useState(true);

  const shareUrl =
    typeof window !== "undefined" ? window.location.href : "";

  useEffect(() => {
    if (!id) return;

    const getData = async () => {
      try {
        const response = await axiosPublic.get(`plans/${id}`);
        setPlan(response.data.data);
      } catch (error) {
        console.error("Error fetching plan data:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [id, axiosPublic]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Plan not found</h2>
          <Link href="/plans">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
              Back to Plans
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pt-32">
      {/* HERO IMAGE – REAL SIZE (NO CROP) */}
      <div className="w-full flex justify-center">
        <div className="relative ">
          <Image
            src={plan.imageUrl}
            alt={plan.title}
            width={800}
            height={500}
            className=""
            priority
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className=" px-4 mt-10">
        <div className="max-w-4xl mx-auto">
          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {plan.title}
          </h1>

          {/* SHORT DESCRIPTION */}
          <div className="mb-10">
            <div className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium border-l-4 border-blue-500 pl-6 py-2">
              {plan.shortDescription}
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="mb-12">
            <div
              className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: plan.description }}
            />
          </div>

          {/* SHARE SECTION (UNCHANGED) */}
          <div className="mb-16 p-3 md:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
            <div className="flex  items-center justify-between gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 md:w-12 h-8 md:h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                    <FaShareAlt className="text-white md:text-xl" />
                  </div>
                  <h3 className="md:text-2xl font-bold text-gray-900">
                    Share This
                  </h3>
                </div>
              </div>

              <div className="lg:w-1/2">
                <ShareButtons
                  shareUrl={shareUrl}
                  title={plan.title}
                  quote={plan.shortDescription}
                  hashtag={`#${plan.title.replace(/\s+/g, "")}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RELATED PLANS */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 ">
          <RelatedPlans />
        </div>
      </div>
    </div>
  );
};

export default PlanDetailsPage;
