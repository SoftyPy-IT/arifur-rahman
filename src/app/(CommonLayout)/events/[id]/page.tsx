import React from "react";

import type { Metadata } from "next";
import EventDetails from "@/components/event/EventDetails";
import { TEvent } from "@/types/types";

const page = () => {
  return (
    <>
      <EventDetails/>
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
  const res = await fetch(`${baseApi}/events/${id}`,{cache:"no-cache"});
  const data = await res.json();
  const finalData:TEvent = data.data;
  return {
    title: `${finalData.title}`,
    description: finalData.shortDescription,
    openGraph: {
      title:finalData.title,
      description:finalData.shortDescription,
      images: [
        {
          url: finalData.imageUrl,
          width: 800,
          height: 600,
          alt: finalData.location,
        },
      ],
    },
  };
}




