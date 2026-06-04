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
