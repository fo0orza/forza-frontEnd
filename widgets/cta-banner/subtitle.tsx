import { getTranslations } from "next-intl/server"

const Subtitle = async () => {
    const t = await getTranslations("CtaBanner")
    return (
        <p className="mt-5 max-w-xl text-base text-primary/60">
            {t("subtitle")}
        </p>
    )
}

export default Subtitle
