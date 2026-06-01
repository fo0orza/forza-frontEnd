import { TrendingUp } from "lucide-react"
import { getTranslations } from "next-intl/server"

const ProgressChart = async () => {
    const t = await getTranslations("Dashboard.progressChart")
    return (
        <div className="rounded-lg border border-muted-foreground/30 bg-background/40 p-3">
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{t("label")}</div>
                    <div className="mt-0.5 flex items-baseline gap-1">
                        <span className="text-lg font-bold text-primary">{t("value")}</span>
                        <span className="text-[10px] text-secondary">{t("vsLastWeek")}</span>
                    </div>
                </div>
                <TrendingUp className="h-4 w-4 text-secondary" />
            </div>
            <svg viewBox="0 0 200 60" className="mt-2 h-14 w-full">
                <defs>
                    <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="oklch(0.82 0.24 145)" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="oklch(0.82 0.24 145)" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path
                    d="M0,45 L25,38 L50,42 L75,28 L100,32 L125,20 L150,24 L175,12 L200,16 L200,60 L0,60 Z"
                    fill="url(#g1)"
                />
                <path
                    d="M0,45 L25,38 L50,42 L75,28 L100,32 L125,20 L150,24 L175,12 L200,16"
                    fill="none"
                    stroke="oklch(0.82 0.24 145)"
                    strokeWidth="1.5"
                />
            </svg>
        </div>
    )
}

export default ProgressChart
