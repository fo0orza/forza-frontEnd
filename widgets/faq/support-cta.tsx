import { ArrowRight } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"

const SupportCta = async () => {
    const t = await getTranslations("Faq.support")
    return (
        <div className="mx-auto mt-16 max-w-[720px] border-t border-white/[0.06] pt-12 text-center">
            <p className="text-base text-primary/60">{t("title")}</p>
            <Link
                href="#contact"
                className="mt-2 inline-flex items-center gap-1.5 text-[15px] font-medium text-secondary transition-all duration-200 hover:[text-shadow:0_0_16px_var(--secondary)] rtl:flex-row-reverse"
            >
                {t("cta")}
                <ArrowRight aria-hidden="true" className="h-4 w-4 rtl:rotate-180" />
            </Link>
            <p className="mt-2 text-[13px] text-muted-foreground">{t("note")}</p>
        </div>
    )
}

export default SupportCta
