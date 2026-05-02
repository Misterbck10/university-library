"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Image as IKImage } from "@imagekit/next";
import BookCoverSvg from "@/components/BookCoverSvg";
import config from "@/lib/config";

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  extraSmall: "book-cover_extra_small",
  small: "book-cover_small",
  medium: "book-cover_medium",
  regular: "book-cover_regular",
  wide: "book-cover_wide",
};

interface Props {
  className?: string;
  variant?: BookCoverVariant;
  coverColor: string;
  coverImage: string;
  priority?: boolean;
}

const BookCover = ({
  className,
  variant = "regular",
  coverColor = "#012B48",
  coverImage = "https://placehold.co/400x600.png",
  priority = false,
}: Props) => {
  const cleanCoverImage = coverImage.trim();
  const imageRef = useRef<HTMLImageElement>(null);
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const placeholderSrc = `${config.env.imagekit.urlEndpoint}/tr:w-20,q-10/${cleanCoverImage}`;

  const handleLoad = () => {
    setShowPlaceholder(false);
  };

  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className,
      )}
    >
      <BookCoverSvg coverColor={coverColor} />
      <div
        className="absolute z-10"
        style={{ left: "12%", width: "87.5%", height: "88%" }}
      >
        <IKImage
          ref={imageRef}
          src={cleanCoverImage}
          urlEndpoint={config.env.imagekit.urlEndpoint}
          alt="Book cover"
          fill
          className="rounded-sm object-fill"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="eager"
          onLoad={handleLoad}
          style={
            showPlaceholder
              ? {
                  backgroundImage: `url(${placeholderSrc})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }
              : undefined
          }
        />
      </div>
    </div>
  );
};

export default BookCover;
