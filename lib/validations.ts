import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(3),
<<<<<<< HEAD
  email: z.string().email(),
  universityId: z.coerce.number(),
  universityCard: z.string().nonempty("University Card is required"),
=======
<<<<<<< HEAD
  email: z.email(),
  universityId: z.coerce.number(),
  universityCard: z.string().min(1, { message: "University Card is required" }),
=======
  email: z.string().email(),
  universityId: z.coerce.number(),
  universityCard: z.string().nonempty("University Card is required"),
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
>>>>>>> cce12f6 (fixed the ESLint warnings and change the Image tag to normal image html tag)
  password: z.string().min(8),
});

export const signInSchema = z.object({
<<<<<<< HEAD
  email: z.string().email(),
=======
<<<<<<< HEAD
  email: z.email(),
=======
  email: z.string().email(),
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
>>>>>>> cce12f6 (fixed the ESLint warnings and change the Image tag to normal image html tag)
  password: z.string().min(8),
});
