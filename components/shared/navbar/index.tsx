
import { getTranslations } from "next-intl/server"
import Logo from "@/components/shared/logo"
import NavLinks from "@/components/shared/navbar/nav-links"


const Navbar = async () => {
    const t = await getTranslations("Navbar");
    return (
        <nav aria-label={t("ariaLabel")} className="w-full max-w-content absolute left-0 right-0 top-0 z-100 mx-auto flex items-center justify-between px-6  py-6">
            <Logo />
            <NavLinks />
        </nav>
    )
}

export default Navbar