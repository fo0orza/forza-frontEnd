import AnimatedCircle from "@/components/ui/animated-circle"
import Badge from "@/components/ui/badge"
import { IBentoCardWithContent } from "@/interfaces/pain-points"
import { cn } from "@/lib/utils"
import GhostNumber from "@/widgets/pain-points/pain-bento-grid/bento-card/ghost-number"
import Subtitle from "@/widgets/pain-points/pain-bento-grid/bento-card/subtitle"
import Title from "@/widgets/pain-points/pain-bento-grid/bento-card/title"

interface IProps {
    card: IBentoCardWithContent,
    className?: string
}
const BentoCard = ({ card, className }: IProps) => {
    return (
        <li className={cn(className)}>
            <article className="relative h-full px-8 py-8 overflow-hidden bg-card-dark/50 backdrop-blur-sm border border-muted-foreground/20 hover:border-coral/50 transition-all duration-350 ease-in-out rounded-[20px] hover:-translate-y-1.5">
                <GhostNumber ghost={card.ghost} />
                <div className="relative z-3">
                    <div className="flex items-center justify-between">
                        <Badge text={card.tag} variant="coral" glowCircle={false} />
                        <AnimatedCircle variant="coral" />
                    </div>
                    <Title title={card.title} />
                    <Subtitle subtitle={card.sub} />
                </div>
            </article>
        </li>
    )
}

export default BentoCard