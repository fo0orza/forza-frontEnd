import { getTranslations } from "next-intl/server"
import GridPattern from "@/components/shared/grid-pattern"
import Badge from "@/components/ui/badge"
import FaqTabs from "@/widgets/faq/faq-tabs"
import Heading from "@/widgets/faq/heading"
import SupportCta from "@/widgets/faq/support-cta"
import Subtitle from "@/widgets/faq/subtitle"

const FaqSection = async () => {
    const t = await getTranslations("Faq")
    return (
        <section
            id="faq"
            aria-labelledby="faq-heading"
            className="relative w-full overflow-hidden bg-background py-30"
        >
            <div className="opacity-40">
                <GridPattern />
            </div>

            <div className="container-wrapper relative z-10 px-6">
                <header className="mx-auto mb-14 flex max-w-3xl flex-col items-center text-center">
                    <Badge text={t("badge")} />
                    <div className="mt-8">
                        <Heading />
                    </div>
                    <Subtitle />
                </header>

                <FaqTabs />

                <SupportCta />
            </div>
        </section>
    )
}

export default FaqSection
