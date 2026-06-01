import { ArrowRight, Play } from "lucide-react"
import { getLocale, getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";

const Cta = async () => {
    const t = await getTranslations("Hero.cta");
    const locale = await getLocale();
    const isRtl = locale === "ar";
    return (
        <div className="flex flex-col sm:flex-row gap-3 items-center mt-8">
            <Button variant={"secondary"} className="px-5 py-5 capitalize">
                {t("primary")} <ArrowRight className={isRtl ? "rotate-180" : ""} />
            </Button>
            <Button className={cn("px-5 py-5 capitalize bg-background/70 backdrop-blur-sm text-primary hover:bg-background/50 border border-primary/10" , isRtl ? "flex-row-reverse" : "")}>
                {t("secondary")} <Play />
            </Button>
        </div>
    )
} 

export default Cta