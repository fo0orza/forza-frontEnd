import { getLocale, getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";

const Heading = async () => {
    const locale = await getLocale();

    const t = await getTranslations("PainPoints.heading");
    return (
        <h2 id="pain-points-heading" className={cn("text-primary leading-[1.15] tracking-tight font-bold uppercase text-[clamp(2.5rem,6vw,4.75rem)] text-center" , locale === "ar" ? "font-cairo" : "font-oswald")}>
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