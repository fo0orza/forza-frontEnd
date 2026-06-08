import { type ICtaAvatar } from "@/interfaces/cta-banner"

export const CTA_BANNER_AVATARS: ICtaAvatar[] = Array.from({ length: 5 }).map((_, i) => ({
    id: `cta-avatar-${i}`,
    gradient: `linear-gradient(135deg, oklch(0.82 0.24 145 / ${0.3 + i * 0.1}), oklch(0.3 0.05 ${i * 60}))`,
}))
