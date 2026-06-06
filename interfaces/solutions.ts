import { type LucideIcon } from "lucide-react"

export interface ISolution {
    icon: LucideIcon
    translationKey: string
}

export interface ISolutionWithContent extends ISolution {
    title: string
    description: string
}
