import { getTranslations } from "next-intl/server";
const Heading = async () => {
    const t = await getTranslations("PainPoints.heading");
    return (
        <h2 id="pain-points-heading" className="text-primary leading-[1.15] tracking-tight font-bold uppercase text-[clamp(2.5rem,6vw,4.75rem)] text-center rtl:font-cairo ltr:font-oswald">
            {t("line1")}
            <br />
            {t("line2")}{" "}
            <span className="text-coral">
                {t("wrong")}
            </span>
        </h2>
    )
}

export default Heading