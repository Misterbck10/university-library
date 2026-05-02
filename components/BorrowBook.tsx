"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { borrowBook } from "@/lib/actions/book";

interface Pros {
  userId: string;
  bookId: string;
  borrowingEligibility: {
    isEligible: boolean;
    message: string;
  };
}

const BorrowBook = ({
  userId,
  bookId,
  borrowingEligibility: { isEligible, message },
}: Pros) => {
  const router = useRouter();
  const [borrowing, setBorrowing] = useState(false);

  const handleBorrow = async () => {
    if (!isEligible) {
      toast.error("Cannot Borrow", {
        description: message,
      });
    }

    setBorrowing(true);

    try {
      const result = await borrowBook({ bookId, userId });
      if (result.success) {
        toast.success("Success", {
          description: "You have successfully borrowed the book.",
        });
        router.push("/my-profile");
      } else {
        toast.error("Error", {
          description:
            result.message || "An error occurred while borrowing the book.",
        });
      }
    } catch (error) {
      toast.error("Error", {
        description: "An error occurred while borrowing the book.",
      });
    } finally {
      setBorrowing(false);
    }
  };
  return (
    <Button
      className="book-overview_btn"
      onClick={handleBorrow}
      disabled={borrowing}
    >
      <img src="/icons/book.svg" alt="book" className="h-5 w-5" />
      <p className="font-bebas-neue text-xl text-dark-100">
        {borrowing ? "Borrowing ... " : "Borrow Book"}
      </p>
    </Button>
  );
};
export default BorrowBook;
