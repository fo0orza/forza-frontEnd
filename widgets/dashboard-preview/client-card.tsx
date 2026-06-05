"use client"
import { useTranslations } from "next-intl"
import useLocalization from "@/hooks/use-localization"

interface ClientCardProps {
    name: string
    planKey: string
    week: number
    progress: number
}

const ClientCard = ({ name, planKey, week, progress }: ClientCardProps) => {
    const t = useTranslations("Dashboard.clientPlans")
    const { formatNumber } = useLocalization()

    const initials = name
        .split(" ")
        .map((n) => n[0])
        .join("")

    return (
        <div className="flex items-center gap-3 rounded-lg border border-muted-foreground/30 bg-background/40 p-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/20 text-[10px] font-semibold text-secondary">
                {initials}
            </div>
            <div className="min-w-0 flex-1">
                <div className="truncate text-xs font-medium text-primary">{name}</div>
                <div className="truncate text-[10px] text-muted-foreground">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {t(planKey as any)} · {t("week", { n: formatNumber(week) })}
                </div>
            </div>
            <div className="hidden w-16 sm:block">
                <div className="h-1 w-full overflow-hidden rounded-full bg-muted-foreground/30">
                    <div className="h-full rounded-full bg-secondary" style={{ width: `${progress}%` }} />
                </div>
                <div className="mt-1 text-right text-[9px] text-muted-foreground">{formatNumber(progress)}%</div>
            </div>
        </div>
    )
}

export default ClientCard
