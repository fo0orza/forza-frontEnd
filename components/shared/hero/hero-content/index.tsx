import { getTranslations } from "next-intl/server";
import Dashboard from "@/components/shared/dashboard";
import HeroCta from "@/components/shared/hero/hero-content/cta";
import Heading from "@/components/shared/hero/hero-content/heading";
import Subtitle from "@/components/shared/hero/hero-content/subtitle";
import Badge from "@/components/ui/badge"



const HeroContent = async () => {
    const t = await getTranslations("Hero");
    return (
        <div className="relative w-full z-10 min-h-dvh pt-30 max-w-content mx-auto px-6">
            <div className="flex flex-col items-center">
                <Badge text={t("badge")} className="mx-auto" />
                <Heading />
                <Subtitle />
                <HeroCta />
                <div className="relative mt-20 w-full max-w-7xl">
                    <Dashboard />
                </div>
            </div>
        </div>
    )
}

export default HeroContent
