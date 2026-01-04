/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import ArticleSectionHomePage from "@/components/Article/ArticleSectionHomePage";
import Banner from "@/components/Banner/Banner";
import ElectionCampaign from "@/components/electionCampaign/ElectionCampaign";
import EventSliderHomePage from "@/components/event/EventSliderHomePage";
import IntroductionVideo from "@/components/introductionVideo/IntroductionVideo";
import OurConcern from "@/components/OurConcern";
import VoiceOnMedia from "@/components/VoiceOnMedia";
import { TFeatures } from "@/types/types";
import PlanSliderHomePage from "./Plan/PlanSliderHomePage";
import Manifesto from "./Manifesto/page.tsx";

const HomePage = () => {
  const [features, setFeatures] = useState<TFeatures | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/features`
        );

        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
        }

        const data = await res.json();
        setFeatures(data.data);
      } catch (err: any) {
        console.error("Failed to fetch features:", err);
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!features) return null;

  return (
    <div>
      {/* Banner */}
      <Banner />

      {/* Our Concern & Introduction Video */}
      <section
        className="lg:py-20 px-3 bg-transparent"
        style={{
          backgroundImage: "url('/Images/testi-bg.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center items-center w-full">
          <OurConcern ourConcernIssue={features.ourConcernIssue} />
        </div>

        <div className="flex justify-center items-center mt-10">
          <IntroductionVideo />
        </div>
      </section>
      <div className="">
        <PlanSliderHomePage />
      </div>

      {/* Election Campaign */}
      <div className="">
        <ElectionCampaign electionCampaign={features.electionCampaign} />
      </div>

      <div className="">
        <Manifesto />
      </div>
      {/* Event Slider */}
      <div className="flex justify-center items-center lg:mt-10">
        <EventSliderHomePage />
      </div>

      {/* Articles */}
      <div className="">
        <ArticleSectionHomePage />
      </div>

      {/* Voice on Media */}
      <div className="">
        <VoiceOnMedia />
      </div>
    </div>
  );
};

export default HomePage;
