import { TPlan } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PlanItemCard = ({ plan }: { plan: TPlan }) => {
  return (
    <Link href={`/plans/${plan?._id}`} className="block">
      <div className="group relative h-[300px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
        {/* Fixed height container */}
        <div className="relative w-full h-full">
          <Image
            src={plan?.imageUrl}
            alt={plan?.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="group-hover:scale-105 transition-transform duration-700"
            priority={false}
          />
          
          {/* Gradient Overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-5 md:p-6">
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-white text-center group-hover:text-blue-300 transition-colors duration-300">
                {plan?.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlanItemCard;