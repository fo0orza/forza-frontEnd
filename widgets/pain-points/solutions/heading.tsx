import { getTranslations } from "next-intl/server"

const Heading = async () => {
    const t = await getTranslations("Solutions.heading")

    return (
        <h3 id="solutions-heading" className="text-2xl font-medium uppercase tracking-[0.3em] text-primary text-center">{t("badge")}</h3>
    )
}

export default Heading