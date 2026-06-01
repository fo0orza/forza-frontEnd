import { Flame, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export const NAV_ITEMS = ["dashboard", "clients", "programs", "nutrition", "messages"] as const

export const CLIENTS = [
    { name: "Sarah Chen", planKey: "hypertrophy", week: 4, progress: 78 },
    { name: "Marcus Reid", planKey: "cut", week: 2, progress: 45 },
    { name: "Aisha Khan", planKey: "strength", week: 7, progress: 92 },
    { name: "David Park", planKey: "recomp", week: 1, progress: 18 },
] as const

export const MACROS = [
    { labelKey: "protein", value: 85, grams: 210 },
    { labelKey: "carbs", value: 62, grams: 280 },
    { labelKey: "fats", value: 48, grams: 70 },
] as const

export interface MiniStat {
    icon: LucideIcon
    value: number
    labelKey: string
    isPercent?: boolean
}

export const MINI_STATS: MiniStat[] = [
    { icon: Users, value: 24, labelKey: "active" },
    { icon: Flame, value: 96, labelKey: "retention", isPercent: true },
]
