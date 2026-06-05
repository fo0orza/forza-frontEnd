"use client"
import { Menu, X } from "lucide-react"
import { useNavbarStore } from "@/store/navbar"

const NavbarMobileMenu = () => {
    const { isDrawerOpen, toggleDrawer } = useNavbarStore()

    return (
        <button
            onClick={toggleDrawer}
            aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
            aria-expanded={isDrawerOpen}
            className="flex items-center justify-center rounded-lg  text-muted-foreground border-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
        >
            <span className="relative w-6 h-6 flex items-center justify-center">
                <Menu
                    size={24}
                    className="absolute transition-opacity duration-200"
                    style={{ opacity: isDrawerOpen ? 0 : 1 }}
                />
                <X
                    size={24}
                    className="absolute transition-opacity duration-200"
                    style={{ opacity: isDrawerOpen ? 1 : 0 }}
                />
            </span>
        </button>
    )
}

export default NavbarMobileMenu
