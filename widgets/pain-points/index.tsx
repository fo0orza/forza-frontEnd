import { getTranslations } from "next-intl/server";
import GridPattern from "@/components/shared/grid-pattern";
import Badge from "@/components/ui/badge";
import Heading from "@/widgets/pain-points/heading";
import PainBentoGrid from "@/widgets/pain-points/pain-bento-grid";
import Subtitle from "@/widgets/pain-points/subtitle";

const PainPoints = async () => {
    const t = await getTranslations("PainPoints");
    return (
        <section className="relative w-full overflow-hidden" id="pain-points" aria-labelledby="pain-points-heading">
            <GridPattern />
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-200 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{ background: "radial-gradient(circle, oklch(0.65 0.24 25 / 0.06), transparent 70%)" }}
            />
            <div className="relative z-3 py-40">
                <div className="w-full flex flex-col items-center gap-8">
                    <Badge text={t("badge")} />
                    <Heading />
                    <Subtitle />
                </div>
                <PainBentoGrid />
            </div>
        </section>
    )

}
export default PainPoints;