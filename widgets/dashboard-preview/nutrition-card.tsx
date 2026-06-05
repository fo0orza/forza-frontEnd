"use client"
import { Apple } from "lucide-react"
import { MACROS } from "@/constants"
import { useTranslations } from "next-intl"
import useLocalization from "@/hooks/use-localization"

const NutritionCard = () => {
    const t = useTranslations("Dashboard.nutrition")
    const { formatNumber } = useLocalization()
    return (
        <div className="rounded-lg border border-muted-foreground/30 bg-background/40 p-3">
            <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                    <Apple className="h-3.5 w-3.5 text-secondary" />
                    <span className="text-xs font-semibold text-primary">{t("title")}</span>
                </div>
                <span className="text-[10px] text-muted-foreground">{t("kcal")}</span>
            </div>
            <div className="space-y-1.5">
                {MACROS.map((macro) => (
                    <div key={macro.labelKey}>
                        <div className="flex justify-between text-[10px]">
                            <span className="text-muted-foreground">{t(`macros.${macro.labelKey}` as any)}</span>
                            <span className="text-foreground">{formatNumber(macro.grams)}g</span>
                        </div>
                        <div className="mt-1 h-1 overflow-hidden rounded-full bg-muted-foreground/30">
                            <div className="h-full rounded-full bg-secondary" style={{ width: `${macro.value}%` }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NutritionCard
