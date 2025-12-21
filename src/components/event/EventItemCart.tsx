import { TEvent } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "./event.css";

const EventCardItem = ({ event }: { event: TEvent }) => {
  return (
    <div
      key={event?._id}
      className="max-w-[520px]  md:h-[480px] lg:h-full rounded-xl shadow-lg hover:shadow-2xl bg-white border border-gray-200 mx-2 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
    >
      <Link href={`/events/${event?._id}`} className="h-full flex flex-col">
        {/* Image Container - Full width and height, no padding */}
        <div className="w-full h-64 flex-shrink-0 overflow-hidden">
          <Image
            src={event?.imageUrl}
            alt="Event Image"
            width={520}
            height={256}
            className="w-full h-full object-cover duration-500 hover:scale-110 transition-transform"
          />
        </div>

        {/* Content Container */}
        <div className="p-3 lg:p-5 flex-grow flex flex-col">
          {/* Title with underline */}
          <div className="mb-3">
            <h2 className="text-xl font-bold text-blue-950 pb-2 ">
              {event?.title.length > 80
                ? `${event?.title?.slice(0, 80)}...`
                : event?.title}
            </h2>
          </div>

          {/* Short Description */}
          <div className="mb-4 flex-grow">
            <p className="text-gray-700 text-sm">
              {event?.shortDescription?.slice(0, 120)}
              {event?.shortDescription?.length > 120 && (
                <span className="text-blue-600 font-medium ml-1">
                  ...আরও দেখুন
                </span>
              )}
            </p>
          </div>

          {/* Event Details */}
          <div className="mt-auto pt-4 border-t border-gray-100">
            <div className="text-sm text-gray-600 space-y-2">
              {/* Date */}
              <div className="flex items-center gap-2">
                <FaCalendar className="text-blue-600" />
                <p className="font-medium">
                  {new Date(event?.date).toLocaleDateString('en-US', {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-red-600" />
                <p className="font-medium truncate">
                  {event?.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCardItem;