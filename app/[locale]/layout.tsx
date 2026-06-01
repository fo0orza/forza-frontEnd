import "styles/tailwind.css"
import { Bebas_Neue, Instrument_Serif, Oswald } from "next/font/google"
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["italic"],
  variable: "--font-instrument-serif",
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





export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }>; }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html dir={locale === 'ar' ? 'rtl' : 'ltr'} lang={locale} className={cn("font-sans antialiased", instrumentSerif.variable, oswald.variable, bebasNeue.variable)}>
      <body suppressHydrationWarning={true}>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
