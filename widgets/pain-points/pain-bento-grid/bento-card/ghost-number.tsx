import { getLocale } from "next-intl/server"
import { formatNumber } from "@/helpers"

const GhostNumber = async ({ ghost }: { ghost: string }) => {
    const locale = await getLocale();

    return (
        <span aria-hidden="true" className="absolute rtl:left-1 ltr:right-1 bottom-1 block w-fit text-coral/6 z-2 font-extrabold text-[120px] leading-none ltr:font-oswald rtl:font-cairo">
            {formatNumber(locale , 0)}{formatNumber(locale, parseInt(ghost))}
        </span>
    )
}

export default GhostNumber