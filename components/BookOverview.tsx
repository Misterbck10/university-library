import React from "react";
<<<<<<< HEAD
import Image from "next/image";
=======
<<<<<<< HEAD
=======
import Image from "next/image";
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
>>>>>>> cce12f6 (fixed the ESLint warnings and change the Image tag to normal image html tag)
import { Button } from "@/components/ui/button";
import BookCover from "@/components/BookCover";

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  total_copies,
  available_copies,
  description,
  color,
  cover,
}: Book) => {
  return (
    <section className="book-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1>{title}</h1>

        <div className="book-info">
          <p>
            By <span className="font-semibold text-light-200">{author}</span>
          </p>

          <p>
            Category{" "}
            <span className="font-semibold text-light-200">{genre}</span>
          </p>

          <div className="flex flex-row gap-1">
<<<<<<< HEAD
            <Image src="/icons/star.svg" alt="star" width={22} height={22} />
=======
<<<<<<< HEAD
            <img
              src="/icons/star.svg"
              alt="star"
              className="h-[22px] w-[22px]"
            />
=======
            <Image src="/icons/star.svg" alt="star" width={22} height={22} />
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
>>>>>>> cce12f6 (fixed the ESLint warnings and change the Image tag to normal image html tag)
            <p>{rating}</p>
          </div>
        </div>

        <div className="book-copies">
          <p>
            Total Books: <span>{total_copies}</span>
          </p>

          <p>
            Available Books: <span>{available_copies}</span>
          </p>
        </div>

        <p className="book-description">{description}</p>

        <Button className="book-overview_btn">
<<<<<<< HEAD
          <Image src="/icons/book.svg" alt="book" width={20} height={20} />
=======
<<<<<<< HEAD
          <img src="/icons/book.svg" alt="book" className="h-5 w-5" />
=======
          <Image src="/icons/book.svg" alt="book" width={20} height={20} />
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
>>>>>>> cce12f6 (fixed the ESLint warnings and change the Image tag to normal image html tag)
          <p className="font-bebas-neue text-xl text-dark-100">Borrow</p>
        </Button>
      </div>

      <div className="relative flex flex-1 justify-center">
        <div className="relative">
          <BookCover
            variant="wide"
            className="z-10"
            coverColor={color}
            coverImage={cover}
<<<<<<< HEAD
=======
<<<<<<< HEAD
            priority={true}
=======
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
>>>>>>> cce12f6 (fixed the ESLint warnings and change the Image tag to normal image html tag)
          />
        </div>

        <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
          <BookCover variant="wide" coverColor={color} coverImage={cover} />
        </div>
      </div>
    </section>
  );
};
export default BookOverview;
