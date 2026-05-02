"use client";

import React from "react";
import { ImageKitProvider, Video as IKVideo } from "@imagekit/next";
import config from "@/lib/config";

const {
  env: {
    imagekit: { urlEndpoint },
  },
} = config;

const BookVideo = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <ImageKitProvider urlEndpoint={urlEndpoint}>
      <IKVideo src={videoUrl} controls={true} className="w-full rounded-xl" />
    </ImageKitProvider>
  );
};

export default BookVideo;
