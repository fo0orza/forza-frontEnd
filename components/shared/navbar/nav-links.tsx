import { getTranslations } from "next-intl/server"
import LanguageSwitcher from "@/features/language/language-switcher";
import { NAV_LINKS } from "@/constants";
import { Link } from "@/i18n/navigation"

const NavLinks = async () => {
    const t = await getTranslations("Navbar.links");


    const RENDER_LINKS = NAV_LINKS.map((key) => (
        <Link
            key={key}
            href={`#${key}`}
            className="text-sm text-muted-foreground hover:text-primary transition-colors capitalize"
        >
            {t(key)}
        </Link>
    ))

    return (
        <div className="hidden md:flex items-center gap-6">
            {RENDER_LINKS}
            <LanguageSwitcher />
        </div>
    )
}

export default NavLinks