import React from "react";
import type { Metadata } from "next";
import { TArticle } from "@/types/types";
import ArticleDetails from "@/components/Article/ArticleDetails";

const page = () => {
  return (
    <>
      <ArticleDetails/>
    </>
  );
};

export default page;

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const baseApi = process.env.NEXT_PUBLIC_BASE_API_URL;
  const id = (await params).id;
  console.log(id);
  const res = await fetch(`${baseApi}/articles/${id}`,{cache:"no-cache"});
  const data = await res.json();
  const finalData:TArticle = data.data;
  return {
    title: `${finalData.title}`,
    description: finalData.shortDescription,
    openGraph: {
      images: [
        {
          url: finalData.imageUrl,
          width: 800,
          height: 600,
          alt: finalData.title,
        },
      ],
    },
  };
}




