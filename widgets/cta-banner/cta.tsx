import { ArrowRight } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { Button } from "@/components/ui/button"

const Cta = async () => {
    const t = await getTranslations("CtaBanner.cta")
    return (
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
                variant="secondary"
                className="px-7 py-5 text-sm font-semibold capitalize shadow-[0_0_18px_-6px_var(--secondary)] hover:shadow-[0_0_24px_-4px_var(--secondary)] rtl:flex-row-reverse"
            >
                {t("primary")} <ArrowRight aria-hidden="true" />
            </Button>
            <Button
                variant="outline"
                className="px-7 py-5 text-sm font-semibold capitalize bg-background/70 text-primary border-white/10 hover:bg-background/50 hover:text-primary backdrop-blur-sm"
            >
                {t("secondary")}
            </Button>
        </div>
    )
}

export default Cta
