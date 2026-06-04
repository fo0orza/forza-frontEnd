import grain from "@/assets/imgs/grain.jpg"
import CircleFade from "@/widgets/hero/hero-background/glow-circle/circle-fade"

const GlowCircle = () => {
    return (
        <>
            <div className="bg-white blur-xs absolute left-1/2 -translate-x-1/2 top-[39.5%] xl:top-[47%] rounded-full z-4 w-[max(100vw,700px)] h-[max(100vw,700px)]" />
            <div style={{
                boxShadow: `inset 0 4px 25px var(--secondary), inset 0 6px 65px var(--secondary), inset 0 10px 100px rgba(0,230,118,0.6), 0 -4px 15px 2px var(--secondary), 0 -2px 55px 10px rgba(0,230,118,0.8)`,
                animation: "glowPulse 3s ease-in-out infinite"
            }} className="bg-background absolute left-1/2 -translate-x-1/2 top-[40%] xl:top-[47.5%] rounded-full z-5 w-[max(110vw,770px)] h-[max(110vw,770px)]" />
            <div
                style={{
                    backgroundImage: `url(${grain.src})`,
                    backgroundSize: "200px 200px",
                    backgroundRepeat: "repeat",
                    mixBlendMode: "overlay",
                }}
                className="absolute left-1/2 -translate-x-1/2 top-[40%] xl:top-[47.5%] rounded-full z-6 w-[max(110vw,770px)] h-[max(110vw,770px)] opacity-25 pointer-events-none"
            />
            <CircleFade />
            <CircleFade />
            <CircleFade />
        </>
    )
}

export default GlowCircle