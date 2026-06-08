import { getTranslations } from "next-intl/server"

const Heading = async () => {
    const t = await getTranslations("CtaBanner.heading")
    return (
        <h2
            id="cta-banner-heading"
            className="font-bold uppercase text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] tracking-tight rtl:font-cairo ltr:font-oswald"
        >
            <span className="text-primary">{t("line1")}</span>{" "}
            <span style={{ textShadow: "0 0 40px oklch(0.82 0.24 145 / 0.45)" }} className="text-secondary">
                {t("line2")}
            </span>
        </h2>
    )
}

export default Heading
