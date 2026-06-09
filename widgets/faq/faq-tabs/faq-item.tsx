import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FaqItemProps {
    value: string
    numberLabel: string
    question: string
    answer: string
}

const FaqItem = ({ value, numberLabel, question, answer }: FaqItemProps) => {
    return (
        <AccordionItem
            value={value}
            className="group/item relative border-b border-white/[0.06] px-2 transition-colors duration-200 data-[state=open]:border-secondary/20 data-[state=open]:bg-linear-to-r data-[state=open]:from-secondary/[0.04] data-[state=open]:to-transparent"
        >
            <span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-secondary transition-transform duration-200 group-hover/item:scale-y-100 group-data-[state=open]/item:scale-y-100 group-data-[state=open]/item:shadow-[2px_0_12px_var(--secondary)] rtl:left-auto rtl:right-0"
            />

            <AccordionTrigger className="py-7 text-primary transition-colors duration-200 group-hover/item:text-secondary group-data-[state=open]/item:text-secondary [&[data-state=open]>svg]:text-secondary [&>svg]:text-[#444444] group-hover/item:[&>svg]:text-secondary">
                <span className="flex flex-1 items-start gap-4">
                    <span className="mt-[3px] font-oswald text-[13px] leading-[1.4] tracking-wider text-secondary/60 transition-opacity duration-200 group-hover/item:opacity-100 group-data-[state=open]/item:opacity-100">
                        {numberLabel}
                    </span>
                    <span className="text-[17px] font-medium leading-snug">
                        {question}
                    </span>
                </span>
            </AccordionTrigger>

            <AccordionContent className="max-w-[620px] pb-7 ps-[34px] pe-2 text-[15px] leading-[1.8] text-primary/55">
                {answer}
            </AccordionContent>
        </AccordionItem>
    )
}

export default FaqItem
