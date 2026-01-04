"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import PlanItemCard from "./PlanItemCard";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { TPlan } from "@/types/types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PlanSliderHomePage = () => {
  const axiosPublic = useAxiosPublic();
  const [plans, setPlans] = useState<TPlan[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosPublic.get(`plans?limit=8`);
        const { data } = response?.data?.data;
        setPlans(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [axiosPublic]);

  const handlePrev = useCallback(() => {
    if (isAnimating || plans.length === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? plans.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating, plans.length]);

  const handleNext = useCallback(() => {
    if (isAnimating || plans.length === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === plans.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating, plans.length]);

  // Auto-slide every 6 seconds
  useEffect(() => {
    if (plans.length === 0) return;

    autoSlideRef.current = setInterval(() => {
      handleNext();
    }, 6000);

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [plans.length, handleNext]);

  // Get cards per view based on screen size
  const getCardsPerView = () => {
    if (typeof window === "undefined") return 1;
    const width = window.innerWidth;
    if (width < 768) return 1; // Mobile: 1 card
    if (width < 1024) return 2; // Tablet: 2 cards
    return 3; // Desktop: 3 cards
  };

  // Get visible plans with padding for smooth transition
  const getVisiblePlans = () => {
    if (plans.length === 0) return [];

    const cardsPerView = getCardsPerView();
    const visible = [];

    // Get current cards
    for (let i = 0; i < cardsPerView; i++) {
      const index = (currentIndex + i) % plans.length;
      visible.push(plans[index]);
    }

    return visible;
  };

  const visiblePlans = getVisiblePlans();

  if (plans.length === 0) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-3 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading plans...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50/30 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 mb-4">
            Related Plans
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 p-1 md:p-4 rounded-full bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed group border border-gray-300"
            aria-label="Previous plan"
          >
            <FaChevronLeft className="text-blue-600 text-md md:text-2xl group-hover:scale-110 transition-transform " />
          </button>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 p-1 md:p-4 rounded-full bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed group border border-gray-300"
            aria-label="Next plan"
          >
            <FaChevronRight className="text-blue-600 text-md md:text-2xl group-hover:scale-110 transition-transform" />
          </button>

          {/* Smooth Slider Container */}
          <div
            ref={sliderRef}
            className="overflow-hidden px-3 md:px-12 lg:px-16"
          >
            {/* Cards Grid - No opacity transition here */}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ${
                isAnimating ? "opacity-100" : "opacity-100"
              }`}
            >
              {visiblePlans.map((plan, index) => (
                <div
                  key={`${plan._id}-${currentIndex}-${index}`}
                  className={`
                    
                    ${isAnimating ? `` : ""}
                  `}
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <PlanItemCard plan={plan} />
                </div>
              ))}
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center items-center mt-8 gap-2">
            {plans.slice(0, Math.min(plans.length, 8)).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 700);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-blue-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Add smooth CSS animations */}
    </section>
  );
};

export default PlanSliderHomePage;
