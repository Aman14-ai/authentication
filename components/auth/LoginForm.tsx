"use client";
import React, { useTransition } from "react";
import Cardwrapper from "./Cardwrapper";
import { useForm } from "react-hook-form";
import z from "zod";
import { LoginSchema } from "@/schemas/index";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import FormError from "../FormError";
import FormSuccess from "../FormSuccess";
import { login } from "@/actions/login";
import { useSearchParams } from "next/navigation";

const LoginForm = () => {

  const searchParams = useSearchParams();
  const errorUrl = searchParams.get("error") === "OAuthAccountNotLinked" ? "This email is already used with other providers.": "";

  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = React.useState<string | undefined>();
  const [successMessage, setSuccessMessage] = React.useState<
    string | undefined
  >();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(async () => {
      try {
        setErrorMessage(undefined);
        setSuccessMessage(undefined);
        await login(values).then((data) => {
          setErrorMessage(data.error);
          setSuccessMessage(data.success);
        }); // Assuming login is an async function that handles the login logic
      } catch (error) {
        console.error("Login error:", error);
        setErrorMessage("Login failed. Please check your credentials.");
      }
    });
  };

  return (
    <Cardwrapper
      backButtonlabel="don't have an account?"
      backButtonhref="/auth/register"
      headerlabel="Welcome back!"
      useSocial={true}
    >
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      type="email"
                      placeholder="aman@example.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="password"
                      placeholder="********"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={errorMessage || errorUrl} />
          <FormSuccess message={successMessage} />
          <Button disabled={isPending} className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </Cardwrapper>
  );
};

export default LoginForm;
