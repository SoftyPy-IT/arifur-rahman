/* eslint-disable @typescript-eslint/no-explicit-any */
import {  TPhotoCards } from "@/types/types";
import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface ImageModalProps {
  close: (value: boolean) => void;
  selectedIndex: number;
  images: TPhotoCards[];
}

const ImageModal: React.FC<ImageModalProps> = ({ close, selectedIndex, images }) => {
  const galleryRef = useRef<any>(null);

  useEffect(() => {
    if (galleryRef.current && typeof galleryRef.current.slideToIndex === "function") {
      galleryRef.current.slideToIndex(selectedIndex);
    }
  }, [selectedIndex]);

  const galleryItems: ReactImageGalleryItem[] = useMemo(
    () =>
      images.map((image: TPhotoCards) => ({
        original: image.imageUrl,
        thumbnail: image.imageUrl,
        renderItem: () => (
          <Zoom>
            <div className="w-full h-[250px] md:h-[400px] lg:h-[400px] relative">
              <Image
                src={image.imageUrl}
                alt={image.title}
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </Zoom>
        ),
      })),
    [images]
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/20 bg-opacity-50 backdrop-blur-sm"></div>

      {/* Modal */}
      <div className="relative z-50 w-[90%] md:w-[600px] lg:w-[800px] max-h-[90%] bg-black/40  backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
        <button
          className="absolute top-3 right-3 text-3xl text-white hover:text-blue-600 z-50 rounded"
          onClick={() => close(false)}
          role="button"
          tabIndex={0}
        >
          <RxCross2 />
        </button>
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] ">
          <ImageGallery
            ref={galleryRef}
            items={galleryItems}
            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;

