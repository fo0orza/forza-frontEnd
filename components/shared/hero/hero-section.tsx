import HeroBackground from "@/components/shared/hero/hero-background"
import HeroContent from "@/components/shared/hero/hero-content"

const HeroSection = () => {
    return (
        <div className="relative w-full min-h-dvh overflow-hidden">
            <HeroBackground />
            <HeroContent />
        </div>
    )
}

export default HeroSection