import GridPattern from "@/components/shared/grid-pattern"
import BackLight from "@/widgets/hero/hero-background/back-light"
import Fade from "@/widgets/hero/hero-background/fade"
import GlowCircle from "@/widgets/hero/hero-background/glow-circle/glow-circle"
import Particles from "@/widgets/hero/hero-background/particles"



const HeroBackground = () => {
    return (
        <div aria-hidden="true" className="absolute inset-0 z-1 overflow-hidden">
            <GridPattern />
            <Particles />
            <BackLight />
            <GlowCircle />
            <Fade />
        </div>
    )
}

export default HeroBackground
