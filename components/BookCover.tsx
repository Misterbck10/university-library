import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import BookCoverSvg from "@/components/BookCoverSvg";

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  extraSmall: "book-cover_extra_small",
  small: "book-cover_small",
  medium: "book-cover_medium", // ✅ fixed typo: was "book-covee_medium"
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
                     coverImage = "https://placehold.co/400x600.png", // ✅ removed trailing space
                     priority = false,
                   }: Props) => {
  // ✅ trim any accidental whitespace from parent
  const cleanCoverImage = coverImage.trim();

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
        <Image
          src={cleanCoverImage}
          alt="Book cover"
          fill
          className="rounded-sm object-fill"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="eager"
          priority={priority}
        />
      </div>
    </div>
  );
};

export default BookCover;