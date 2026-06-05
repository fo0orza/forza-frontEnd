import { LanguagesOptions } from "@/constants/locale"
import { LocaleKey } from "@/types/locale"


export const getCurrentLanguageData = (locale: string) => {
  const localeKey = locale as LocaleKey
  return LanguagesOptions[localeKey]?.find((item) => item.value === locale)
}

export const getAllLanguagesInLocale = (locale: string) => {
  const localeKey = locale as LocaleKey
  return LanguagesOptions[localeKey]
}

export const formatNumber = (locale: string, num: number, options?: Intl.NumberFormatOptions): string => {
  const isRtl = locale === "ar"
  if (isRtl) {
    return new Intl.NumberFormat("ar-EG", { useGrouping: false, ...options }).format(num)
  }
  if (options) {
    return new Intl.NumberFormat("en-US", { useGrouping: false, ...options }).format(num)
  }
  return num.toString()
}
