import { getTranslations } from "next-intl/server"
import { Accordion } from "@/components/ui/accordion"
import { FAQ_ITEMS } from "@/constants/faq"
import { type FaqAudience } from "@/interfaces/faq"
import FaqItem from "@/widgets/faq/faq-tabs/faq-item"

const FaqList = async ({ audience }: { audience: FaqAudience }) => {
    const t = await getTranslations(`Faq.${audience}`)
    const defaultValue = FAQ_ITEMS[0]?.translationKey

    return (
        <Accordion type="single" collapsible defaultValue={defaultValue} className="mx-auto max-w-[720px] border-t border-white/[0.06]">
            {FAQ_ITEMS.map((item) => (
                <FaqItem
                    key={`${audience}-${item.translationKey}`}
                    value={item.translationKey}
                    numberLabel={item.translationKey}
                    question={t(`${item.translationKey}.q`)}
                    answer={t(`${item.translationKey}.a`)}
                />
            ))}
        </Accordion>
    )
}

export default FaqList
