import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { type IFooterColumn } from "@/interfaces/footer"

const FooterLinksColumn = async ({ column }: { column: IFooterColumn }) => {
    const t = await getTranslations(`Footer.columns.${column.translationKey}`)

    return (
        <nav aria-label={t("title")}>
            <h3 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#444444]">
                {t("title")}
            </h3>
            <ul className="flex flex-col gap-3.5 list-none m-0 p-0">
                {column.links.map((link) => (
                    <li key={link.translationKey}>
                        <Link
                            href={link.href}
                            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="group inline-flex items-center gap-2 text-[14px] text-muted-foreground transition-colors duration-200 hover:text-white"
                        >
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-secondary opacity-0 shadow-[0_0_8px_var(--secondary)] transition-opacity duration-200 group-hover:opacity-100"
                            />
                            {t(`links.${link.translationKey}`)}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default FooterLinksColumn
