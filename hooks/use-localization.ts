"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { useMemo } from "react";
import { getAllLanguagesInLocale, getCurrentLanguageData, formatNumber as formatNumberUtil } from "@/helpers";
import { usePathname } from "@/i18n/navigation";

const useLocalization = () => {
    const locale = useLocale();
    const isRtl = useMemo(() => locale === "ar", [locale]);
    const availableLanguages = getAllLanguagesInLocale(locale);
    const currentLang = getCurrentLanguageData(locale);
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const formatNumber = (num: number, options?: Intl.NumberFormatOptions): string =>
        formatNumberUtil(locale, num, options)
    const currentTime = new Intl.DateTimeFormat(
        locale === "ar" ? "ar-EG" : "en-US",
        {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        }
    ).format(new Date());

    const handleChangeLanguage = (newLocal: string) => {
        if (newLocal === locale) return
        const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/"
        const newPath = `/${newLocal}${pathWithoutLocale}?${searchParams.toString()}`
        router.push(newPath, { scroll: false })
    }

    return {
        locale,
        isRtl,
        formatNumber,
        currentTime,
        availableLanguages,
        currentLang,
        handleChangeLanguage
    }
}

export default useLocalization