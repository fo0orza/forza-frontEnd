import { getTranslations } from "next-intl/server";
import GridPattern from "@/components/shared/grid-pattern"
import Badge from "@/components/ui/badge"
import FeatureTabs from "@/widgets/feature-showcase/feature-tabs"
import Heading from "@/widgets/feature-showcase/heading"
import Subtitle from "@/widgets/feature-showcase/subtitle"

const FeatureShowcaseSection = async () => {
    const t = await getTranslations("FeatureShowcase");
    return (
        <section id="features" aria-labelledby="feature-showcase-heading" className="relative overflow-hidden">
            <GridPattern />
            <div className="relative z-3 pt-50 px-6">
                <header className="relative w-full flex flex-col items-center gap-8">
                    <Badge text={t("badge")} />
                    <Heading />
                    <Subtitle />
                    <div style={{ background: "radial-gradient(ellipse, oklch(0.82 0.24 145 / 0.15), transparent 70%)" }} className="absolute w-150 -z-1 h-150 -top-20 left-1/2 -translate-x-1/2" />
                </header>
                <div className="mt-8">
                    <FeatureTabs />
                </div>
            </div>
        </section>
    )
}

export default FeatureShowcaseSection