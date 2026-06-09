import { getTranslations } from "next-intl/server"

const Subtitle = async () => {
    const t = await getTranslations("Faq")
    return (
        <p className="mt-5 max-w-xl text-base text-muted-foreground">
            {t("subtitle")}
        </p>
    )
}

export default Subtitle
