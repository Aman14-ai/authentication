import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "./ui/button";

export const Social = () => {
  return (
    <div className="flex items-center gap-x-12 ">
      <Button onClick={() => {}} variant={'outline'} className="w-full" size="lg" >
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button onClick={() => {}} variant={'outline'} className="w-full" size="lg" >
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
};


