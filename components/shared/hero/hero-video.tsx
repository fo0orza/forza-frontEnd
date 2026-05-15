import { cn } from "@/lib/utils"

interface IProps {
    className?: string
}
const HeroVideo = ({ className }: IProps) => {
    return (
        <video
            className={cn(className)}
            src="/videos/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
        />
    )
}

export default HeroVideo