import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/LoginButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className="bg-[radial-gradient(ellipse_at_top,theme(colors.sky.500),theme(colors.blue.800))] flex items-center flex-col justify-center  h-full">
      <div className="flex flex-col space-y-4 items-center justify-center text-center">
        <h1 className={cn("text-6xl text-background", poppins.className)}>
          🌐OAuth
        </h1>
        <p className="text-2xl text-muted">Complete Auth Service</p>
      </div>
      <div>
        <LoginButton mode="redirect">
          <Button className="mt-4 cursor-pointer" variant={"outline"}>
            Login
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
