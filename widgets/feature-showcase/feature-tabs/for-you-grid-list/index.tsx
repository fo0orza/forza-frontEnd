import { getTranslations } from "next-intl/server";
import { forYouFeatures } from "@/constants/feature-showcase";
import FeatureCard from "@/widgets/feature-showcase/feature-tabs/feature-card";

const ForYouGridList = async () => {
    const t = await getTranslations("FeatureShowcase");
    return (
        <ul role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0">
            {forYouFeatures.map((feature) => (
                <li key={feature.translationKey}>
                    <FeatureCard
                        icon={feature.icon}
                        title={t(`forYouFeatures.${feature.translationKey}.title`)}
                        description={t(`forYouFeatures.${feature.translationKey}.description`)}
                        badge={t(`forYouFeatures.${feature.translationKey}.badge`)}
                    />
                </li>
            ))}
        </ul>
    )
}

export default ForYouGridList
