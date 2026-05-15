import HeroActions from "@/components/shared/hero/hero-actions"

const HeroContent = () => {
    return (
        <div className="w-full h-screen relative z-1 flex items-center justify-center">
            <div className="space-y-6">
                <h1 className="text-center text-primary text-6xl font-semibold tracking-tight">
                    We don't make app. <br /> We build <span className="font-instrument-serif italic  tracking-wider">winners.</span>
                </h1>
                <p className="text-center text-neutral-300 text-xl font-medium">
                    Product strategy, design, and engineering <br /> for teams that want to lead their market.
                </p>
                <HeroActions />
            </div>
        </div>
    )
}

export default HeroContent