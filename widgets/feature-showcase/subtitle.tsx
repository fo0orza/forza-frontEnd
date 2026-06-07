import { getTranslations } from "next-intl/server";

const Subtitle = async () => {
    const t = await getTranslations("FeatureShowcase");
    return (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg text-center">
            {t("subtitle")}
        </p>
    )
}

export default Subtitle