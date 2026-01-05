/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import ImageModal from "./ImageModal";
import { MdOutlineFullscreen } from "react-icons/md";
import HeroPhotoCardBanner from "./HeroPhotoCardBanner";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { TPhotoCards } from "@/types/types";
import Image from "next/image";

const PhotoCard = () => {
  const axiosPublic = useAxiosPublic();
  const [images, setImages] = useState<TPhotoCards[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const limit = 12;

  // Initial load
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axiosPublic.get(
          `photoCards?limit=${limit}&page=${currentPage}&sort=-date`
        );
        const { totalCount, data } = response?.data?.data;
        setImages(data);
        setTotalCount(totalCount);
        setHasMore(data.length === limit && totalCount > data.length);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  // Load more function
  const loadMore = async () => {
    if (loadingMore || !hasMore) return;
    
    setLoadingMore(true);
    const nextPage = currentPage + 1;
    
    try {
      const response = await axiosPublic.get(
        `photoCards?limit=${limit}&page=${nextPage}&sort=-createdAt`
      );
      const { totalCount, data } = response?.data?.data;
      
      setImages(prev => [...prev, ...data]);
      setCurrentPage(nextPage);
      setHasMore(data.length === limit && totalCount > images.length + data.length);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingMore(false);
    }
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setOpenModal(true);
  };

  // Loading skeleton
  const LoadingSkeleton = () => (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="break-inside-avoid mb-4 md:mb-6 rounded-lg overflow-hidden"
        >
          <div className="relative bg-gray-200 rounded-lg overflow-hidden animate-pulse">
            <div className="w-full pt-[75%] bg-gray-300" />
            <div className="p-4">
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
              <div className="h-3 bg-gray-300 rounded w-1/2" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white">
      {openModal && (
        <ImageModal
          close={setOpenModal}
          selectedIndex={selectedImageIndex || 0}
          images={images}
        />
      )}

      {/* Banner section */}
      <HeroPhotoCardBanner />

      {/* Masonry Gallery */}
      <section
        data-aos="fade-up"
        data-aos-duration="2500"
        className="flex justify-center px-5"
      >
        <div className="mt-20 mb-8 max-w-7xl w-full">
          {loading ? (
            <LoadingSkeleton />
          ) : images.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No photos found</p>
            </div>
          ) : (
            <>
              {/* Masonry Grid Container */}
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
                {images.map((image: TPhotoCards, index: number) => (
                  <div
                    key={`${image?._id}-${index}`}
                    onClick={() => handleImageClick(index)}
                    className="break-inside-avoid mb-4 md:mb-6 group cursor-pointer rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                  >
                    {/* Image Container */}
                    <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                      {/* Next.js Image with auto height */}
                      <div className="relative w-full">
                        <Image
                          src={image?.imageUrl}
                          alt={image?.title || "Photo"}
                          width={400}
                          height={300}
                          className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-105"
                          style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain'
                          }}
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                      </div>
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                      
                      {/* Fullscreen Icon */}
                      <MdOutlineFullscreen className="text-3xl text-white absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                      
                      {/* Title and Date */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-semibold text-lg mb-1 line-clamp-1">
                          {image?.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {new Date(image?.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className="flex justify-center mt-12">
                  <button
                    onClick={loadMore}
                    disabled={loadingMore}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {loadingMore ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Loading...
                      </>
                    ) : (
                      'Load More Photos'
                    )}
                  </button>
                </div>
              )}

              
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default PhotoCard;