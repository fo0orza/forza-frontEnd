import { getTranslations } from "next-intl/server";
import GridPattern from "@/components/shared/grid-pattern";
import Badge from "@/components/ui/badge";
import Heading from "@/widgets/pain-points/heading";
import PainBentoGrid from "@/widgets/pain-points/pain-bento-grid";
import Solutions from "@/widgets/pain-points/solutions";
import Subtitle from "@/widgets/pain-points/subtitle";

const PainPointsSection = async () => {
    const t = await getTranslations("PainPoints");
    return (
        <section className="relative w-full overflow-hidden" id="pain-points" aria-labelledby="pain-points-heading">
            <GridPattern />
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-[40%] h-200 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{ background: "radial-gradient(circle, oklch(0.65 0.24 25 / 0.06), transparent 70%)" }}
            />
            <div className="relative z-3 py-40 px-6">
                <header className="w-full flex flex-col items-center gap-8">
                    <Badge text={t("badge")} />
                    <Heading />
                    <Subtitle />
                </header>
                <div className="mt-24">
                    <PainBentoGrid />
                </div>
                <div className="relative mt-24">
                    <Solutions />
                    <div style={{ background: "radial-gradient(ellipse, oklch(0.82 0.24 145 / 0.15), transparent 70%)" }} className="absolute w-150 -z-1 h-150 -top-20 left-1/2 -translate-x-1/2" />
                </div>
            </div>
        </section>
    )

}
export default PainPointsSection;