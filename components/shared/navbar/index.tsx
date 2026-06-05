import NavbarLogo from "@/components/shared/logo/index"
import NavbarDrawer from "@/components/shared/navbar/NavbarDrawer"
import NavbarLinks from "@/components/shared/navbar/NavbarLinks"
import NavbarMobileMenu from "@/components/shared/navbar/NavbarMobileMenu"
import LanguageSwitcher from "@/features/language/language-switcher"
const Navbar = () => {
    return (
        <>
            <nav className="w-full absolute left-0 right-0 top-0 z-40 transition-all duration-300">
                <div className="max-w-content mx-auto flex items-center justify-between px-6 py-6">
                    <NavbarLogo />
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:block">
                            <NavbarLinks />
                        </div>
                        <LanguageSwitcher />
                        <div className="lg:hidden">
                            <NavbarMobileMenu />
                        </div>
                    </div>
                </div>
            </nav>
            <NavbarDrawer />
        </>
    )
}

export default Navbar
