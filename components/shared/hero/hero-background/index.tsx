import BackLight from "@/components/shared/hero/hero-background/back-light"
import BgGrid from "@/components/shared/hero/hero-background/bg-grid"
import Fade from "@/components/shared/hero/hero-background/fade"
import GlowCircle from "@/components/shared/hero/hero-background/glow-circle/glow-circle"
import Particles from "@/components/shared/hero/hero-background/particles"


const HeroBackground = () => {
    return (
        <div className="absolute inset-0 z-1 overflow-hidden">
            <BgGrid />
            <Particles />
            <BackLight />
            <GlowCircle />
            <Fade />
        </div>
    )
}

export default HeroBackground
