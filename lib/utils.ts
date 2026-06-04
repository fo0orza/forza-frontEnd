import { type ClassValue, clsx } from "clsx"
import { getLocale } from "next-intl/server";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function isRtl(): Promise<boolean> {
  const locale = await getLocale();
  return locale === "ar";
}