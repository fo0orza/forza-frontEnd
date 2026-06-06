import GridPattern from "@/components/shared/grid-pattern"
import BackLight from "@/widgets/hero/hero-background/back-light"
import Fade from "@/widgets/hero/hero-background/fade"
import GlowCircle from "@/widgets/hero/hero-background/glow-circle/glow-circle"



const HeroBackground = () => {
    return (
        <div aria-hidden="true" className="absolute inset-0 z-1 overflow-hidden">
            <GridPattern />
            <BackLight />
            <GlowCircle />
            <Fade />
        </div>
    )
}

export default HeroBackground
