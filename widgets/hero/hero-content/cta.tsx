import { ArrowRight, Play } from "lucide-react"
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button"

const Cta = async () => {
    const t = await getTranslations("Hero.cta");
    return (
        <div className="flex flex-col sm:flex-row gap-3 items-center mt-8">
            <Button variant={"secondary"} className="px-5 py-5 capitalize rtl:flex-row-reverse">
                {t("primary")} <ArrowRight  />
            </Button>
            <Button className="px-5 py-5 capitalize bg-background/70 backdrop-blur-sm text-primary hover:bg-background/50 border border-primary/10 rtl:flex-row-reverse">
                {t("secondary")} <Play />
            </Button>
        </div>
    )
}

export default Cta