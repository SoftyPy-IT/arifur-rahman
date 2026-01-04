/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import React from "react";

export default function PostalVote() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        

        <div className="space-y-14">
          {/* Postal Vote — Image Left (Keep existing) */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* Image */}
            <div className="relative overflow-hidden">
              <Image
                src="/Images/postal/postal.png"
                alt="Postal Vote System"
                width={300}
                height={300}
                className="h-full w-full rounded"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Postal voting (IT Supported)
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed max-w-lg">
                Eligible voters can complete postal voting related procedures
                using the official mobile application. Below are important
                instructions, samples, and official circulars.
              </p>

              {/* Resource List */}
              <ul className="mt-5 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-600">•</span>
                  <Link
                    href="https://www.ecs.gov.bd/bec/public/files/Postal%20Voting/OCV_Postal%20Vote_BD_compressed.pdf"
                    target="_blank"
                    className="hover:underline"
                  >
                    Instruction for Postal Voting registration schedule using
                    Mobile App (OCV) – PDF
                  </Link>
                </li>

                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-600">•</span>
                  <Link
                    href="https://www.ecs.gov.bd/bec/public/files/Postal%20Voting/ICV_Postal%20Vote_BD2_compressed.pdf"
                    target="_blank"
                    className="hover:underline"
                  >
                    Instruction for Postal Voting registration schedule using
                    Mobile App (ICPV) – PDF
                  </Link>
                </li>

                <li className="flex items-start gap-2">
                  <span className="mt-1 text-blue-600">•</span>
                  <Link href="/postal-vote" className="hover:underline">
                    How to fill up address in mobile app – with samples
                  </Link>
                </li>

                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-600">•</span>
                  <Link
                    href="https://www.ecs.gov.bd/files/JjPAukrNEqv8M3llPnI2d2rKJXOlIfWH6QkZTAJI.pdf"
                    target="_blank"
                    className="hover:underline"
                  >
                    Circular for Out of Country Voting (OCV) – PDF
                  </Link>
                </li>
              </ul>

              {/* Existing CTA */}
              <Link href="/postal-vote" className="inline-flex mt-6">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  View Details
                  <FaArrowRight className="text-xs" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
