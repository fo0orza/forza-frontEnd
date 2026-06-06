import { getTranslations } from "next-intl/server"
import { SOLUTIONS } from "@/constants/solutions"
import Card from "@/widgets/pain-points/solutions/card"

const SolutionsGrid = async () => {
    const t = await getTranslations("Solutions")

    const cards = SOLUTIONS.map((solution) => ({
        ...solution,
        title: t(`${solution.translationKey}.title`),
        description: t(`${solution.translationKey}.description`),
    }))

    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0" role="list">
            {cards.map((card) => (
                <li key={card.translationKey}>
                    <Card {...card} />
                </li>
            ))}
        </ul>
    )
}

export default SolutionsGrid