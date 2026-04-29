"use client";
import React from "react";
import AuthForm from "@/components/AuthForm";
import { signInSchema, signUpSchema } from "@/lib/validations";

const Page = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
      email: "",
      password: "",
      fullname: "",
      universityId: 0,
      universityCard: "",
    }}
    onSubmit={async () => ({ success: true })}
  />
);
export default Page;
