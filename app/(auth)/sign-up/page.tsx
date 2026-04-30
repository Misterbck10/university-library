"use client";
import React from "react";
import AuthForm from "@/components/AuthForm";
<<<<<<< HEAD
import { signInSchema, signUpSchema } from "@/lib/validations";
=======
<<<<<<< HEAD
import { signUpSchema } from "@/lib/validations";
>>>>>>> cce12f6 (fixed the ESLint warnings and change the Image tag to normal image html tag)
import { signUp } from "@/lib/actions/auth";
=======
import { signInSchema, signUpSchema } from "@/lib/validations";
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)

const Page = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
      email: "",
      password: "",
<<<<<<< HEAD
      fullName: "",
      universityId: 0,
      universityCard: "",
    }}
    onSubmit={signUp}
=======
      fullname: "",
      universityId: 0,
      universityCard: "",
    }}
    onSubmit={async () => ({ success: true })}
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
  />
);
export default Page;
