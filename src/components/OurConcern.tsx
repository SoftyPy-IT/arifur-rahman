import { TOurConcernIssue } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { IoCheckmarkDoneSharp } from "react-icons/io5";

const OurConcernIssue = ({
  ourConcernIssue,
}: {
  ourConcernIssue: TOurConcernIssue;
}) => {
  return (
    <>
      <div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col lg:flex-row gap-8 items-center justify-center w-full lg:max-w-6xl my-10 relative"
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0  bg-opacity-80"></div>

          <div className="hidden lg:block w-full md:w-1/2 relative z-10">
            <Image
              src={ourConcernIssue?.imageUrl}
              alt="image"
              width={850}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>         

          {/* Text */}
          <div className="w-full lg:w-1/2 space-y-3 text-center lg:text-left relative z-10">
            <h4 className="text-orange-500 font-semibold">
              Our Concern Issues
            </h4>
            <h2 className="text-4xl font-bold text-blue-900">
              {ourConcernIssue?.title}
            </h2>
            <p>{ourConcernIssue?.description.slice(0, 320)}</p>

            {/* Program */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 pt-2 justify-items-center lg:justify-items-start">
              {ourConcernIssue?.ourConcernIssues ? (
                Object.values(ourConcernIssue.ourConcernIssues).map(
                  (issue, idx) => (
                    <div
                      key={idx}
                      className="p-2 flex items-center gap-3 hover:bg-blue-600 hover:text-white text-black bg-gray-300 rounded-full"
                    >
                      <h3 className="md:text-lg px-3">{issue}</h3>
                    </div>
                  )
                )
              ) : (
                <p>No issues found</p>
              )}
            </div>

            <Link href={"/events"}>
              <button className="hover-border-button mt-6">More Program</button>
            </Link>
          </div>

          {/* Image */}
          <div className="lg:hidden w-full lg:w-1/2 mt-4 relative z-10">
            <Image
              src={ourConcernIssue?.imageUrl}
              alt="image"
              width={850}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurConcernIssue;
