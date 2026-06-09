import Cta from "@/widgets/cta-banner/cta"
import Heading from "@/widgets/cta-banner/heading"
import SocialProof from "@/widgets/cta-banner/social-proof"
import Subtitle from "@/widgets/cta-banner/subtitle"

const CtaBannerSection = () => {
    return (
        <section
            aria-labelledby="cta-banner-heading"
            className="relative w-full overflow-hidden border-t border-t-secondary/20 border-b border-b-white/[0.06] py-20 px-6 bg-linear-to-br from-[#0d1f12] to-background"
        >
            <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
                <Heading />
                <Subtitle />
                <Cta />
                <SocialProof />
            </div>
        </section>
    )
}

export default CtaBannerSection
