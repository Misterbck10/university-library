import React from "react";
import { Button } from "@/components/ui/button";
import { signOut, auth } from "@/auth";
import BookList from "@/components/BookList";
import { db } from "@/database/drizzle";
import { borrowRecords, books } from "@/database/schema";
import { eq } from "drizzle-orm";

const Page = async () => {
  const session = await auth();

  const borrowedBooksRaw = await db
    .select()
    .from(borrowRecords)
    .leftJoin(books, eq(borrowRecords.bookId, books.id))
    .where(eq(borrowRecords.userId, session?.user?.id as string));

  const borrowedBooks = Array.from(
    new Map(
      borrowedBooksRaw
        .map(({ books: book }) => book)
        .filter(Boolean)
        .map((book) => [book!.id, book]),
    ).values(),
  ) as Book[];

  return (
    <>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
        className="mb-10"
      >
        <Button type="submit">Logout</Button>
      </form>

      <BookList title="Borrowed Books" books={borrowedBooks} />
    </>
  );
};

export default Page;
