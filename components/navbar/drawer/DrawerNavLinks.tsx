"use client"
import { useTranslations } from "next-intl"
import { NAV_LINKS } from "@/constants"
import { Link } from "@/i18n/navigation"
import { useNavbarStore } from "@/store/navbar"



const DrawerNavLinks = () => {
    const t = useTranslations("Navbar.links")
    const closeDrawer = useNavbarStore((state) => state.closeDrawer)

    return (
        <nav>
            <ul className="list-none m-0 p-0">
                {NAV_LINKS.map((key) => (
                    <li key={key}>
                        <Link
                            href={`#${key}`}
                            onClick={closeDrawer}
                            className="block py-3.5 text-base text-muted-foreground hover:text-white transition-colors duration-200 capitalize"
                        >
                            {t(key)}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default DrawerNavLinks
