// import GitHub from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from 'next-auth/providers/google';
import Github from 'next-auth/providers/github';
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/lib/utils";
import bcrypt from "bcryptjs";

export default {
  providers: [
    Google({
      clientId:process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET ,
    }),
    
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const user = await getUserByEmail(email);
          if (!user || !user.password) {
            console.error(
              "User not found or password is incorrect from auth.config.ts"
            );
            return null;
          }
          const isPasswordValid = await bcrypt.compare(password , user.password);
          if (!isPasswordValid) {
            console.error("Password is incorrect from auth.config.ts");
            return null;
          }
          return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
