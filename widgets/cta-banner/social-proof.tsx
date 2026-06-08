import { Star } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { CTA_BANNER_AVATARS } from "@/constants/cta-banner"

const SocialProof = async () => {
    const t = await getTranslations("CtaBanner.socialProof")
    return (
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex -space-x-2 rtl:space-x-reverse">
                {CTA_BANNER_AVATARS.map((avatar) => (
                    <div
                        key={avatar.id}
                        aria-hidden="true"
                        className="h-7 w-7 rounded-full border-2 border-background"
                        style={{ background: avatar.gradient }}
                    />
                ))}
            </div>
            <div className="flex items-center gap-1.5 text-[13px] text-primary/55">
                <Star aria-hidden="true" className="h-3.5 w-3.5 fill-secondary text-secondary" />
                <span className="font-semibold text-primary">{t("rating")}</span>
                {t("ratingSource")}
            </div>
        </div>
    )
}

export default SocialProof
