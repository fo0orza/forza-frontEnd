"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import CurrentLanguage from "@/features/language/current-language";
import useLocalization from "@/hooks/use-localization";

const LanguageSwitcher = () => {
    const { availableLanguages , locale, handleChangeLanguage } = useLocalization();


    const RENDER_LANGUAGES = availableLanguages.map((l) => (
        <DropdownMenuRadioItem
            key={l.value}
            value={l.value}
            className="hover:bg-muted-foreground/20! text-muted-foreground hover:text-white! hover:**:text-white! focus:bg-muted-foreground/20! focus:text-white! cursor-pointer transition-colors"
        >
            <span className="block font-medium capitalize">{l.label}</span>
        </DropdownMenuRadioItem>
    ))

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <CurrentLanguage />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-fit min-w-0 bg-background border-muted-foreground border mt-0.5">
                <DropdownMenuRadioGroup value={locale} onValueChange={handleChangeLanguage}>
                    {RENDER_LANGUAGES}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LanguageSwitcher