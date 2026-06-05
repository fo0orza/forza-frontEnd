"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { useCallback, useMemo } from "react";
import { formatNumber as formatNumberUtil, getAllLanguagesInLocale, getCurrentLanguageData } from "@/helpers";
import { usePathname } from "@/i18n/navigation";

const useLocalization = () => {
    const locale = useLocale();
    const isRtl = useMemo(() => locale === "ar", [locale]);
    
    const availableLanguages = useMemo(() => getAllLanguagesInLocale(locale), [locale]);
    const currentLang = useMemo(() => getCurrentLanguageData(locale), [locale]);
    
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const formatNumber = useCallback(
        (num: number, options?: Intl.NumberFormatOptions): string =>
            formatNumberUtil(locale, num, options),
        [locale]
    )

    const currentTime = useMemo(() => {
        const formatter = new Intl.DateTimeFormat(
            locale === "ar" ? "ar-EG" : "en-US",
            { hour: "numeric", minute: "2-digit", hour12: true }
        )
        return formatter.format(new Date())
    }, [locale])

    const handleChangeLanguage = useCallback((newLocal: string) => {
        if (newLocal === locale) return
        const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/"
        const newPath = `/${newLocal}${pathWithoutLocale}?${searchParams.toString()}`
        router.push(newPath, { scroll: false })
    }, [locale, pathname, searchParams, router])

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