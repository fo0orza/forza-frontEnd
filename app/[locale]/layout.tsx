import "styles/tailwind.css"
import { Bebas_Neue, Cairo, DM_Sans, Oswald } from "next/font/google"
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import Navbar from "@/components/shared/navbar";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: ["Inter", "system-ui", "sans-serif"],
})
const oswald = Oswald({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-oswald",
})
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
})

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
})

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }>; }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html dir={locale === 'ar' ? 'rtl' : 'ltr'} lang={locale} className={cn("antialiased", locale === 'ar' ? 'font-cairo' : 'font-sans', dmSans.variable, oswald.variable, bebasNeue.variable, cairo.variable)}>
      <body suppressHydrationWarning={true}>
        <NextIntlClientProvider>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
