import { ReactNode } from "react";
import Image from "next/image";
<<<<<<< HEAD
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (session) redirect("/");
=======

const Layout = ({ children }: { children: ReactNode }) => {
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex flex-row gap-3">
<<<<<<< HEAD
            <Image src="/icons/logo.svg" alt="logo" width={37} height={37} />
=======
<<<<<<< HEAD
            <img src="/icons/logo.svg" alt="logo" className="h-[37px] w-auto" />
=======
            <Image src="/icons/logo.svg" alt="logo" width={37} height={37} />
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
>>>>>>> cce12f6 (fixed the ESLint warnings and change the Image tag to normal image html tag)
            <h1 className="text-2xl font-semibold text-white">BookWise</h1>
          </div>

          <div>{children}</div>
        </div>
      </section>

      <section className="auth-illustration">
        <Image
          src="/images/auth-illustration.png"
          alt="auth-illustration"
          width={1000}
          height={1000}
<<<<<<< HEAD
=======
<<<<<<< HEAD
          priority
=======
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
>>>>>>> cce12f6 (fixed the ESLint warnings and change the Image tag to normal image html tag)
          className="size-full object-cover"
        />
      </section>
    </main>
  );
};
export default Layout;
