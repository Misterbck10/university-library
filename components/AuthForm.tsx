"use client";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
<<<<<<< HEAD
import { z, ZodType } from "zod";
=======
<<<<<<< HEAD
import { ZodType } from "zod";
=======
import { z, ZodType } from "zod";
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
>>>>>>> cce12f6 (fixed the ESLint warnings and change the Image tag to normal image html tag)

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";
<<<<<<< HEAD
import Image from "next/image";
=======
<<<<<<< HEAD
>>>>>>> cce12f6 (fixed the ESLint warnings and change the Image tag to normal image html tag)
import ImageUpload from "@/components/ImageUpload";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
=======
import Image from "next/image";
import ImageUpload from "@/components/ImageUpload";
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)

interface Props<T extends FieldValues> {
  schema: ZodType<T, any, any>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  type: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
}: Props<T>) => {
<<<<<<< HEAD
  const router = useRouter();
=======
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
  const isSignIn = type === "SIGN_IN";

  const form: UseFormReturn<T> = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

<<<<<<< HEAD
  const handleSubmit: SubmitHandler<T> = async (data) => {
    const result = await onSubmit(data);

    if (result.success) {
      toast.success(
        <div className="flex flex-col gap-1">
          <span className="font-semibold">Success</span>
          {isSignIn ? (
            <span className="text-sm text-muted-foreground">
              "You have successfully signed in."
            </span>
          ) : (
            <span className="text-sm text-muted-foreground">
              "You have successfully signed up."
            </span>
          )}
        </div>,
      );

      router.push("/");
    } else {
      toast.error(
        <div className="flex flex-col gap-1">
          <span className="font-semibold">
            Error {isSignIn ? "signing in" : "signing up"}
          </span>
          <span className="text-sm text-muted-foreground">
            {result.error ?? "An error occurred."}
          </span>
        </div>,
      );
    }
  };
=======
  const handleSubmit: SubmitHandler<T> = async (data) => {};
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-white">
        {isSignIn ? "Welcome back to BookWise" : "Create your library account"}
      </h1>
      <p className="text-light-100">
        {isSignIn
          ? "Access the vast collection of resources, and stay updated"
          : "Please complete all fields and upload a valid university ID to gain access to the library"}
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full space-y-6"
        >
          {Object.keys(defaultValues).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as Path<T>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">
                    {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                  </FormLabel>
                  <FormControl>
                    {field.name === "universityCard" ? (
                      <ImageUpload onFileChange={field.onChange} />
                    ) : (
                      <Input
                        required
                        type={
                          FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]
                        }
                        {...field}
                        className="form-input"
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button type="submit" className="form-btn">
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>
        </form>
      </Form>

      <p className="text-center text-base font-medium">
        {isSignIn ? "New to BookWise? " : "Already have an account? "}

        <Link
          href={isSignIn ? "/sign-up" : "/sign-in"}
          className="font-bold text-primary"
        >
          {isSignIn ? "create an account" : "Sign in"}
        </Link>
      </p>
    </div>
  );
};
export default AuthForm;
