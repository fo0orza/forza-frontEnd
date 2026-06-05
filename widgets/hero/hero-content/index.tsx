import { getTranslations } from "next-intl/server";
import Badge from "@/components/ui/badge"
import DashboardPreview from "@/widgets/dashboard-preview";
import Cta from "@/widgets/hero/hero-content/cta";
import Heading from "@/widgets/hero/hero-content/heading";
import Subtitle from "@/widgets/hero/hero-content/subtitle";



const HeroContent = async () => {
    const t = await getTranslations("Hero");
    return (
        <div className="relative w-full z-10 min-h-dvh pt-30 max-w-content mx-auto px-6">
            <div className="flex flex-col items-center">
                <Badge text={t("badge")} className="mx-auto" />
                <Heading />
                <Subtitle />
                <Cta />
                <div className="relative mt-20 w-full max-w-7xl">
                    <DashboardPreview />
                </div>
            </div>
        </div>
    )
}

export default HeroContent
