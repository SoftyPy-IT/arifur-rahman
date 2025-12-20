// src/components/VideoDisplay.tsx
"use client";
import React from 'react';
import ReactPlayer from 'react-player';
import { FaFacebook, FaYoutube } from 'react-icons/fa';

interface VideoDisplayProps {
  videoUrl: string;
  videoType: 'youtube' | 'facebook';
  title?: string;
  width?: string;
  height?: string;
}

const VideoDisplay: React.FC<VideoDisplayProps> = ({
  videoUrl,
  videoType,
  title,
  width = '100%',
  height = '400px',
}) => {
  const getEmbedUrl = () => {
    if (videoType === 'facebook') {
      // Facebook embed URL format
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&show_text=false`;
    }
    return videoUrl; // YouTube URL works directly
  };

  return (
    <div className="video-container">
      <div className="relative">
        <ReactPlayer
          url={getEmbedUrl()}
          width={width}
          height={height}
          controls
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
            facebook: {
              appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
            },
          }}
        />
        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
          {videoType === 'youtube' ? (
            <FaYoutube className="text-red-500" />
          ) : (
            <FaFacebook className="text-blue-500" />
          )}
          <span className="capitalize">{videoType}</span>
        </div>
      </div>
      {title && (
        <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      )}
    </div>
  );
};

export default VideoDisplay;