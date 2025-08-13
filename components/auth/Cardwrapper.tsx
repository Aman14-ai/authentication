"use client";
import React, { Children, use } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "../Header";
import { Social } from "../Social";
import { Button } from "../ui/button";

type Props = {
  children: React.ReactNode;
  className?: string;
  backButtonhref: string;
  backButtonlabel: string;
  headerlabel: string;
  useSocial: boolean;
};

const Cardwrapper = ({
  children,
  className,
  backButtonhref,
  backButtonlabel,
  headerlabel,
  useSocial,
}: Props) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerlabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>

      {useSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter className="flex justify-center">
        <Button variant="link" asChild>
          <a href={backButtonhref}>{backButtonlabel}</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Cardwrapper;
