import { getTranslations } from "next-intl/server"
import { FOOTER_TRUST_BADGES } from "@/constants/footer"
import LanguageSwitcher from "@/features/language/language-switcher"

const FooterBottom = async () => {
  const t = await getTranslations("Footer.bottom")

  return (
    <div className="flex flex-col items-center gap-6 border-t border-muted-foreground/20 pt-8 md:flex-row md:justify-between md:gap-4">
      <p className="order-3 text-[13px] text-[#777777] md:order-1">
        {t("copyright", { year: new Date().getFullYear() })}
      </p>

      <ul className="order-1 m-0 flex list-none flex-wrap items-center justify-center gap-x-6 gap-y-3 p-0 md:order-2">
        {FOOTER_TRUST_BADGES.map((badge, idx) => {
          const Icon = badge.icon
          return (
            <li key={badge.translationKey} className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-[12px] text-[#888888]">
                <Icon className="h-3.5 w-3.5" />
                {t(`badges.${badge.translationKey}`)}
              </span>
              {idx < FOOTER_TRUST_BADGES.length - 1 && (
                <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-white/15 md:inline" />
              )}
            </li>
          )
        })}
      </ul>

     <div className="order-2 md:order:3">
         <LanguageSwitcher />
     </div>
    </div>
  )
}

export default FooterBottom
