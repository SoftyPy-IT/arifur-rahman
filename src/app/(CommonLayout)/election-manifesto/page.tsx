"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaHome } from "react-icons/fa";
import { TManifesto } from "@/types/types";
import useAxiosPublic from "@/hooks/useAxiosPublic";

export default function SingleManifestoPage() {
  const axiosPublic = useAxiosPublic();
  const [manifestos, setManifestos] = useState<TManifesto[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedManifesto, setSelectedManifesto] = useState<TManifesto | null>(
    null
  );

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axiosPublic.get("/manifestos");

        if (response.data.success) {
          let manifestosData: TManifesto[] = [];

          // Handle different response structures
          if (Array.isArray(response.data.data)) {
            manifestosData = response.data.data;
          } else if (
            response.data.data?.data &&
            Array.isArray(response.data.data.data)
          ) {
            manifestosData = response.data.data.data;
          }

          setManifestos(manifestosData);

          // Set the latest manifesto as selected (most recent date)
          if (manifestosData.length > 0) {
            const latest = manifestosData.sort(
              (a, b) =>
                new Date(b.date || "").getTime() -
                new Date(a.date || "").getTime()
            )[0];
            setSelectedManifesto(latest);
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 pt-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-10 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="h-96 bg-gray-200 rounded-lg mb-6"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!selectedManifesto && manifestos.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            No Manifestos Available
          </h2>
          <p className="text-gray-600 mb-6">
            There are no manifestos to display at the moment.
          </p>
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <FaHome className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-32">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Manifesto content */}
          <div
            className={`${
              manifestos.length > 1 ? "lg:col-span-3" : "lg:col-span-4"
            }`}
          >
            {selectedManifesto && (
              <>
                {/* Manifesto Header */}
                <div className="bg-white rounded-xl shadow-md border overflow-hidden mb-8">
                  <div className="relative h-64 md:h-[450px]">
                    <Image
                      src={selectedManifesto.imageUrl}
                      alt={selectedManifesto.title}
                      fill
                      className=""
                      sizes="100vw"
                      priority
                    />
                  </div>
                  <div className="p-6 md:p-8 text-center">
                    <div className="mb-4">
                      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {selectedManifesto.title}
                      </h1>
                    </div>
                    <p className="text-gray-600 text-lg">
                      {selectedManifesto.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Manifesto Content */}
                <div className="bg-white rounded-xl shadow-md border p-6 md:p-8 mb-8">
                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: selectedManifesto.description,
                    }}
                  />
                </div>

                {/* PDF Downloads Section */}
                {selectedManifesto.pdfLinks &&
                  selectedManifesto.pdfLinks.length > 0 && (
                    <div className="bg-white rounded-xl shadow-md border p-6 md:p-8 mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">
                          Download Documents
                        </h3>
                        {/* <span className="text-sm text-gray-500">
                        {selectedManifesto.pdfLinks.length} document(s)
                      </span> */}
                      </div>
                      <div className="space-y-3">
                        {selectedManifesto.pdfLinks.map((pdf, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-red-100 rounded">
                                <FaDownload className="text-red-600" />
                              </div>
                              <div>
                                <div className="font-medium text-gray-900">
                                  {pdf.name}
                                </div>
                                <div className="text-sm text-gray-500 truncate max-w-md">
                                  {pdf.url}
                                </div>
                              </div>
                            </div>
                            <a
                              href={pdf.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                            >
                              Download
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
