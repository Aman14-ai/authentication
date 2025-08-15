'use client'
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";

export const Social = () => {

  const handleClick = (provider: 'google' | 'github') => {
    signIn(provider,{
      callbackUrl: DEFAULT_LOGIN_REDIRECT
    });
  }

  return (
    <div className="flex items-center gap-x-12 ">
      <Button onClick={() => {handleClick('google')}} variant={'outline'} className="w-full" size="lg" >
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button onClick={() => {handleClick('github')}} variant={'outline'} className="w-full" size="lg" >
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
};


