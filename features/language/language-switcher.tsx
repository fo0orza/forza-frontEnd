"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import CurrentLanguage from "@/features/language/current-language"
import useLocalization from "@/hooks/use-localization"

const LanguageSwitcher = () => {
  const { availableLanguages, locale, handleChangeLanguage } = useLocalization()

  const RENDER_LANGUAGES = availableLanguages.map((l) => (
    <DropdownMenuRadioItem
      key={l.value}
      value={l.value}
      className="hover:bg-muted-foreground/20! text-muted-foreground focus:bg-muted-foreground/20! cursor-pointer transition-colors hover:text-white! hover:**:text-white! focus:text-white!"
    >
      <span className="block font-medium capitalize">{l.label}</span>
    </DropdownMenuRadioItem>
  ))

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <CurrentLanguage />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background border-muted-foreground mt-0.5 w-fit min-w-0 border">
        <DropdownMenuRadioGroup value={locale} onValueChange={handleChangeLanguage}>
          {RENDER_LANGUAGES}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageSwitcher
