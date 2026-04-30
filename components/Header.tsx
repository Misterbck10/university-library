"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
<<<<<<< HEAD
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn, getInitials } from "@/lib/utils";
import Image from "next/image";
import { Session } from "@auth/core/types";

const Header = ({ session }: { session: Session }) => {
  const pathome = usePathname();
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
<<<<<<< HEAD
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
=======
        <img src="/icons/logo.svg" alt="logo" className="h-10 w-auto" />
=======
import { cn } from "@/lib/utils";
import Image from "next/image";

const Header = () => {
  const pathome = usePathname();
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
>>>>>>> cce12f6 (fixed the ESLint warnings and change the Image tag to normal image html tag)
      </Link>

      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/library"
            className={cn(
              "text-base cursor-pointer capitalize",
<<<<<<< HEAD
              pathome === "/library" ? "text-light-200" : "text-light-100",
=======
<<<<<<< HEAD
              path === "/library" ? "text-light-200" : "text-light-100",
=======
              pathome === "/library" ? "text-light-200" : "text-light-100",
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
>>>>>>> cce12f6 (fixed the ESLint warnings and change the Image tag to normal image html tag)
            )}
          >
            Library
          </Link>
        </li>
<<<<<<< HEAD

        <li>
          <Link href="/my-profile">
            <Avatar>
              <AvatarFallback className="bg-amber-100">
                {getInitials(session?.user?.name || "IN")}
              </AvatarFallback>
            </Avatar>
          </Link>
        </li>
=======
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
      </ul>
    </header>
  );
};
export default Header;
