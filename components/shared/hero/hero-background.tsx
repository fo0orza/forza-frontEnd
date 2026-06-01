import BackLight from "@/components/shared/hero/back-light"
import BgGrid from "@/components/shared/hero/bg-grid"
import Fade from "@/components/shared/hero/fade"
import GlowCircle from "@/components/shared/hero/glow-circle/glow-circle"
import Particles from "@/components/shared/hero/particles"

const HeroBackground = () => {
    return (
        <div className="absolute z-1 min-h-dvh w-full overflow-hidden">
            <BgGrid />
            <Particles />
            <BackLight />
            <GlowCircle />
            <Fade />
        </div>
    )
}

export default HeroBackground
