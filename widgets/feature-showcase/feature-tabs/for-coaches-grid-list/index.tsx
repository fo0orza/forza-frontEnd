import { getTranslations } from "next-intl/server";
import { features } from "@/constants/feature-showcase";
import FeatureCard from "@/widgets/feature-showcase/feature-tabs/feature-card";

const ForCoachesGridList = async () => {
    const t = await getTranslations("FeatureShowcase");
    return (
        <ul role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0">
            {features.map((feature) => (
                <li key={feature.translationKey}>
                    <FeatureCard
                        icon={feature.icon}
                        title={t(`forCoachesFeatures.${feature.translationKey}.title`)}
                        description={t(`forCoachesFeatures.${feature.translationKey}.description`)}
                        badge={t(`forCoachesFeatures.${feature.translationKey}.badge`)}
                    />
                </li>
            ))}
        </ul>
    )
}

export default ForCoachesGridList