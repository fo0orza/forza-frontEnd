import { User, UserCog } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FaqList from "@/widgets/faq/faq-tabs/faq-list"

const FaqTabs = async () => {
    const t = await getTranslations("Faq.tabs")
    return (
        <Tabs defaultValue="forCoaches" className="mx-auto flex w-full max-w-[720px] flex-col">
            <TabsList className="mx-auto mb-10 rounded-full">
                <TabsTrigger className="cursor-pointer" value="forCoaches">
                    <UserCog aria-hidden="true" className="h-4 w-4" />
                    {t("forCoaches")}
                </TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="forYou">
                    <User aria-hidden="true" className="h-4 w-4" />
                    {t("forYou")}
                </TabsTrigger>
            </TabsList>

            <TabsContent value="forCoaches">
                <FaqList audience="forCoaches" />
            </TabsContent>
            <TabsContent value="forYou">
                <FaqList audience="forYou" />
            </TabsContent>
        </Tabs>
    )
}

export default FaqTabs
