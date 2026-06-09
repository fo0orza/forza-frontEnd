import { getTranslations } from "next-intl/server"

const Heading = async () => {
    const t = await getTranslations("Faq.heading")
    return (
        <h2
            id="faq-heading"
            className="font-bold uppercase text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight rtl:font-cairo ltr:font-oswald"
        >
            <span className="text-primary">{t("line1")}</span>
            <br />
            <span className="text-primary">{t("line2")} </span>
            <span style={{ textShadow: "0 0 40px oklch(0.82 0.24 145 / 0.45)" }} className="text-secondary">
                {t("highlight")}
            </span>
        </h2>
    )
}

export default Heading
