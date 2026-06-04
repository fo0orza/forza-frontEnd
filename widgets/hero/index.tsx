import HeroBackground from "@/widgets/hero/hero-background"
import HeroContent from "@/widgets/hero/hero-content"

const HeroSection = () => {
    return (
        <div className="relative w-full min-h-dvh overflow-hidden">
            <HeroBackground />
            <HeroContent />
        </div>
    )
}

export default HeroSection