import BackLight from "@/widgets/hero/hero-background/back-light"
import BgGrid from "@/widgets/hero/hero-background/bg-grid"
import Fade from "@/widgets/hero/hero-background/fade"
import GlowCircle from "@/widgets/hero/hero-background/glow-circle/glow-circle"
import Particles from "@/widgets/hero/hero-background/particles"



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
