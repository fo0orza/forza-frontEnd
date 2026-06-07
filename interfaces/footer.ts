import { type IconSvgElement } from "@hugeicons/react"
import { type LucideIcon } from "lucide-react"

export interface IFooterLink {
    translationKey: string
    href: string
    external?: boolean
}

export interface IFooterColumn {
    translationKey: string
    links: IFooterLink[]
}

export interface ISocialLink {
    translationKey: string
    href: string
    icon: IconSvgElement
}

export interface ITrustBadge {
    translationKey: string
    icon: LucideIcon
}
