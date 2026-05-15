import "styles/tailwind.css"
import { Figtree, Instrument_Serif } from "next/font/google"
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils"

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" })

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["italic"],
  variable: "--font-instrument-serif",
})


export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }>; }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html dir={locale === 'ar' ? 'rtl' : 'ltr'} lang={locale} className={cn("font-sans antialiased", figtree.variable, instrumentSerif.variable)}>
      <body suppressHydrationWarning={true}>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
