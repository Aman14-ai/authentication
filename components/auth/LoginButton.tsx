'use client'
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
};

const LoginButton = ({children,mode='redirect',asChild}: Props) => {
    
    const router = useRouter();

    if(mode == 'modal')
    {
        // TODO: Implement modal login
        console.warn("Modal login not implemented yet");
        return <span className="mt-4 cursor-not-allowed">Modal login not implemented</span>;
    }

    const handleClick = () =>{
        router.push("/auth/login");
        console.log("Login button clicked");
    }

  return <span onClick={handleClick}>{children}</span>;
};

export default LoginButton;
