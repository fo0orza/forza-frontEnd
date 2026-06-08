import { HugeiconsIcon } from "@hugeicons/react"
import { getTranslations } from "next-intl/server"
import { FOOTER_SOCIAL_LINKS } from "@/constants/footer"
import { Link } from "@/i18n/navigation"

const FooterSocials = async () => {
    const t = await getTranslations("Footer.social")

    return (
        <ul className="flex items-center gap-3 list-none m-0 p-0">
            {FOOTER_SOCIAL_LINKS.map((social) => {
                const network = t(social.translationKey)
                return (
                    <li key={social.translationKey}>
                        <Link
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t("followAria", { network })}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/3 text-muted-foreground transition-all duration-200 hover:border-secondary/50 hover:bg-secondary/10 hover:text-secondary hover:shadow-[0_0_18px_-4px_var(--secondary)]"
                        >
                            <HugeiconsIcon icon={social.icon} size={16} strokeWidth={1.75} />
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default FooterSocials
