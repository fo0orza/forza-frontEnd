import { NAV_ITEMS } from "@/constants"
import { getTranslations } from "next-intl/server"

const Sidebar = async () => {
    const t = await getTranslations("Dashboard.sidebar")
    return (
        <aside className="col-span-3 hidden flex-col gap-1 md:flex">
            <div className="mb-2 text-[10px] uppercase tracking-wider text-muted-foreground">{t("workspace")}</div>
            {NAV_ITEMS.map((key, i) => (
                <div
                    key={key}
                    className={`flex items-center gap-2 rounded-md px-2.5 py-2 text-xs ${
                        i === 1
                            ? "bg-secondary/10 text-secondary ring-1 ring-secondary/30"
                            : "text-muted-foreground"
                    }`}
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                    {t(`nav.${key}` as any)}
                </div>
            ))}
        </aside>
    )
}

export default Sidebar
