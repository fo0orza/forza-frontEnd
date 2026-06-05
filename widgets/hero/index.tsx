import HeroBackground from "@/widgets/hero/hero-background"
import HeroContent from "@/widgets/hero/hero-content"

const HeroSection = () => {
    return (
        <section aria-labelledby="hero-heading" className="relative w-full min-h-dvh overflow-hidden">
            <HeroBackground />
            <HeroContent />
        </section>
    )
}

export default HeroSection