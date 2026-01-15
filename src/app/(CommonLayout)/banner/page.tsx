import BannerClient from "@/components/Banner/BannerClient";
import { TBanner } from "@/types/types";

async function getBanners(): Promise<TBanner[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/banners`, {
    next: {
      revalidate: 300,
    },
  });

  if (!res.ok) return [];

  const json = await res.json();
  return json.data || [];
}

export default async function BannerPage() {
  const banners = await getBanners();

  return <BannerClient initialBanners={banners} />;
}
