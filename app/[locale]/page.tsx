import CtaBannerSection from "@/widgets/cta-banner";
import FaqSection from "@/widgets/faq";
import FeatureShowcaseSection from "@/widgets/feature-showcase";
import HeroSection from "@/widgets/hero";
import PainPointsSection from "@/widgets/pain-points";


export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <PainPointsSection />
            <FeatureShowcaseSection />
            <FaqSection />
            <CtaBannerSection />
        </div>
    )
}