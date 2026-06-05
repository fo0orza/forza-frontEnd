import { getTranslations } from "next-intl/server"
import { NAV_LINKS } from "@/constants";
import LanguageSwitcher from "@/features/language/language-switcher";
import { Link } from "@/i18n/navigation"

const NavLinks = async () => {
    const t = await getTranslations("Navbar.links");


    const RENDER_LINKS = NAV_LINKS.map((key) => (
        <li key={key}>
            <Link
                href={`#${key}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors capitalize"
            >
                {t(key)}
            </Link>
        </li>
    ))

    return (
        <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6 list-none m-0 p-0">
                {RENDER_LINKS}
            </ul>
            <LanguageSwitcher />
        </div>
    )
}

export default NavLinks