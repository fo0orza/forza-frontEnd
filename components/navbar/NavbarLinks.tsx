"use client"
import { useTranslations } from "next-intl"
import { NAV_LINKS } from "@/constants"
import { Link } from "@/i18n/navigation"



const NavbarLinks = () => {
    const t = useTranslations("Navbar.links")

    return (
        <ul className="flex items-center gap-4 list-none m-0 p-0">
            {NAV_LINKS.map((key) => (
                <li key={key}>
                    <Link
                        href={`#${key}`}
                        className="text-[15px] text-[#888888] hover:text-white transition-colors duration-200 capitalize"
                    >
                        {t(key)}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default NavbarLinks
