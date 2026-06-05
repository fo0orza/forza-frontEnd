import { getTranslations } from "next-intl/server";
import { bentoCards } from "@/constants/pain-points";
import { cn } from "@/lib/utils";
import BentoCard from "@/widgets/pain-points/pain-bento-grid/bento-card";

const PainBentoGrid = async () => {
    const t = await getTranslations("PainPoints");

    const RENDER_CARDS = bentoCards.map((p) => (
        <BentoCard
            key={p.ghost}
            card={{
                ...p,
                tag: t(`cards.${p.translationKey}.tag`),
                title: t(`cards.${p.translationKey}.title`),
                sub: t(`cards.${p.translationKey}.sub`),
            }}
            className={cn("col-span-6", p.gridSize)}
        />
    ))

    return (
        <div className="mt-24 max-w-content mx-auto px-6">
            <ul className="grid grid-cols-6 gap-4 list-none p-0 m-0" role="list">
                {RENDER_CARDS}
            </ul>
        </div>
    )
}

export default PainBentoGrid