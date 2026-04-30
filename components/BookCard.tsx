import React from "react";
import Link from "next/link";
import BookCover from "@/components/BookCover";
import { cn } from "@/lib/utils";
<<<<<<< HEAD
import Image from "next/image";
=======
<<<<<<< HEAD
=======
import Image from "next/image";
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
>>>>>>> cce12f6 (fixed the ESLint warnings and change the Image tag to normal image html tag)
import { Button } from "@/components/ui/button";

const BookCard = ({
  id,
  title,
  genre,
  color,
  cover,
  isLoanedBook = false,
}: Book) => (
  <li className={cn(isLoanedBook && "xs:w-52 w-full")}>
    <Link
      href={`/books/${id}`}
      className={cn(isLoanedBook && "w-full flex flex-col items-center")}
    >
      <BookCover coverColor={color} coverImage={cover} />

      <div className={cn("mt-4", !isLoanedBook && "xs:max-w-40 max-w-28")}>
        <p className="book-title">{title}</p>
        <p className="book-genre">{genre}</p>
      </div>

      {isLoanedBook && (
        <div className="mt-3 w-full">
          <div className="book-loaned">
<<<<<<< HEAD
            <Image
              src="/icons/calendar.svg"
              alt="calendar"
              width={18}
              height={18}
              className="object-contain"
=======
<<<<<<< HEAD
            <img
              src="/icons/calendar.svg"
              alt="calendar"
              className="h-[18px] w-[18px] object-contain"
=======
            <Image
              src="/icons/calendar.svg"
              alt="calendar"
              width={18}
              height={18}
              className="object-contain"
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
>>>>>>> cce12f6 (fixed the ESLint warnings and change the Image tag to normal image html tag)
            />
            <p className="text-light-100">11 days left to return </p>
          </div>

<<<<<<< HEAD
          <Button variant="ghost" className="book-btn">Download receipt</Button>
=======
<<<<<<< HEAD
          <Button variant="ghost" className="book-btn">
            Download receipt
          </Button>
=======
          <Button variant="ghost" className="book-btn">Download receipt</Button>
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
>>>>>>> cce12f6 (fixed the ESLint warnings and change the Image tag to normal image html tag)
        </div>
      )}
    </Link>
  </li>
);
export default BookCard;
