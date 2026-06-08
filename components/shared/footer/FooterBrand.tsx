import { getTranslations } from "next-intl/server"
import FooterSocials from "@/components/shared/footer/FooterSocials"
import Logo from "@/components/shared/logo"
import Badge from "@/components/ui/badge"

const FooterBrand = async () => {
    const t = await getTranslations("Footer.brand")

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-start">
                <Logo />
            </div>
            <Badge variant="secondary" text={t("status")} />
            <p className="max-w-sm text-[14px] leading-relaxed text-muted-foreground">
                {t("description")}
            </p>
            <FooterSocials />
        </div>
    )
}

export default FooterBrand
