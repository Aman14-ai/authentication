import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { prisma } from "./db/prisma";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function checkUserExists(email:string)
{
  const user = await prisma.users.findUnique({ where: { email } });
  if (!user) {
    return null;
  }
  return user;
}