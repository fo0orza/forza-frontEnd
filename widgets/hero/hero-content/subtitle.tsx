import { getTranslations } from "next-intl/server";

const Subtitle = async () => {
    const t = await getTranslations("Hero");
    return (
        <p className="mt-8 max-w-lg text-primary/60 lg:leading-relaxed sm:text-lg text-center">
            {t("subtitle")}
        </p>
    )
}

export default Subtitle