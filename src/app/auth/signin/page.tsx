"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGoogle,
} from "@tabler/icons-react"
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function Signin() {

  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(e.currentTarget)
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email")?.toString() || "";
    const password = formData.get("password")?.toString() || "";

    console.log(email)

    // Use NextAuth's signIn method, with credentials provider:
    const result = await signIn("credentials", {
      redirect: false,  // prevent redirect, handle manually
      email,
      password,
    })

    if (result?.error) {
      // handle error here, show message
      setError("Invalid email or password. Try again!")
      // console.error("Failed to sign in:", result.error);
    } else {
      // success: optionally redirect or do something else
      window.location.href = "/dashboard"; // or any page you want to redirect to
    }
  }

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-[rgba(255,255,255,1)] p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <img 
      src="/assets/AboutUsFeatureImg4.png" 
      alt="no image" 
      className="top-0 right-0 w-screen h-screen fixed z-[-1] object-cover blur-sm scale-105"/>
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 text-center">
        Sign in to Volunteer.GG
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300 text-center">
        When service meets ambition, we change the world—together. Continue!
      </p>

      <form className="my-4" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="ex. john.doe@example.com" type="email" name="email" onChange={() => setError(null)}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" name="password" onChange={() => setError(null)}/>
        </LabelInputContainer>
        <p className="text-sm text-center">Don't have an account? 
          <Link className="text-blue-500" href="/auth/signup"> <u>Sign up here!</u></Link>
        </p>
        <button
          className="my-4 group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Sign in &rarr;
          <BottomGradient />
        </button>
        <p className="text-red-500 text-sm text-center">{error || '\u00A0'}</p>
        <div className="my-6 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        <div className="flex flex-col space-y-4">
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
