export type LocaleKey = "en" | "ar"
type LanguageItem = {
  label: string
  value: LocaleKey
}
export type LanguageType = Record<LocaleKey, LanguageItem[]>
