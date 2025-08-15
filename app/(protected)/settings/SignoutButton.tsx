"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();

  async function handleSignOut() {
    await fetch("/signout", { method: "POST" }); // server action API route
    router.push("/auth/login"); // change URL
  }

  return (
    <Button
      onClick={handleSignOut}
      
    >
      Sign out
    </Button>
  );
}
