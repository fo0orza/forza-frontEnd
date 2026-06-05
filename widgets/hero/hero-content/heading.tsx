import { getTranslations } from "next-intl/server";

const Heading = async () => {
    const t = await getTranslations("Hero.heading");
    return (
        <h1 id="hero-heading" className="text-center mt-4 font-bold uppercase text-[clamp(3.5rem,9vw,7rem)] leading-[1.15] tracking-tight rtl:font-cairo ltr:font-oswald">
            <span className="text-primary">{t("line1")}</span>
            <br />
            <span style={{ textShadow: "0 0 40px #009e52" }} className="text-secondary">{t("line2")}</span>
        </h1>
    )
}

export default Heading