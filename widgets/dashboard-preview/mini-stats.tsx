/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useTranslations } from "next-intl"
import { MINI_STATS } from "@/constants"
import useLocalization from "@/hooks/use-localization"

const MiniStats = () => {
    const t = useTranslations("Dashboard.miniStats")
    const { formatNumber } = useLocalization()
    return (
        <div className="grid grid-cols-2 gap-2">
            {MINI_STATS.map(({ icon: Icon, value, labelKey, isPercent }) => (
                <div key={labelKey} className="rounded-lg border border-muted-foreground/30 bg-background/40 p-2.5">
                    <Icon className="h-3.5 w-3.5 text-secondary" />
                    <div className="mt-1 text-sm font-bold text-primary">
                        {formatNumber(value)}{isPercent ? "%" : ""}
                    </div>
                    <div className="text-[9px] text-muted-foreground">{t(labelKey as any)}</div>
                </div>
            ))}
        </div>
    )
}

export default MiniStats
