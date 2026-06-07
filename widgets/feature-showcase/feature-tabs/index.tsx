import { User, UserCog } from "lucide-react"
import { getTranslations } from "next-intl/server";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import ForCoachesGridList from "@/widgets/feature-showcase/feature-tabs/for-coaches-grid-list"
import ForYouGridList from "@/widgets/feature-showcase/feature-tabs/for-you-grid-list"

const FeatureTabs = async () => {
    const t = await getTranslations("FeatureShowcase.tabs");
    return (
        <Tabs defaultValue="for-coaches" className="max-w-content! mx-auto flex flex-col justify-center">
            <TabsList className="mx-auto rounded-full mb-10">
                <TabsTrigger className="cursor-pointer" value="for-coaches">
                    <UserCog aria-hidden="true" className="h-4 w-4" />
                    {t("forCoaches")}
                </TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="for-you">
                    <User aria-hidden="true" className="h-4 w-4" />
                    {t("forYou")}
                </TabsTrigger>
            </TabsList>
            <TabsContent value="for-coaches">
                <ForCoachesGridList />
            </TabsContent>
            <TabsContent value="for-you">
                <ForYouGridList />
            </TabsContent>
        </Tabs>
    )
}

export default FeatureTabs