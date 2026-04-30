<<<<<<< HEAD
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string): string =>
  name
    .split("")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
=======
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
