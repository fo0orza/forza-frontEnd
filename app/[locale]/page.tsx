import FeatureShowcaseSection from "@/widgets/feature-showcase";
import HeroSection from "@/widgets/hero";
import PainPointsSection from "@/widgets/pain-points";


export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <PainPointsSection />
            <FeatureShowcaseSection />
        </div>
    )
}