import { TArticle } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendar } from "react-icons/fa";

const ArticleCard = ({ article }: { article: TArticle }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
      
      {/* Image Container - Larger Height and Width */}
      <div className="relative w-full h-64">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Card Content - Fixed Height */}
      <div className="p-5 flex-grow flex flex-col">
        {/* Date */}
        <div className="flex items-center gap-2 mb-3">
          <FaCalendar className="text-blue-600" />
          <p className="text-sm text-gray-600">
            {new Date(article.publishedDate).toLocaleDateString()}
          </p>
        </div>

        {/* Title with Underline and Fixed Height */}
        <div className="mb-4 flex-grow">
          <h3 className="text-lg font-bold text-gray-800 pb-2">
            {article.title}
          </h3>
        </div>

        {/* Read More Link */}
        <div className="mt-auto pt-4 border-t border-gray-200">
          <Link
            href={`/articles/${article._id}`}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 group transition-colors"
          >
            Read More
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;