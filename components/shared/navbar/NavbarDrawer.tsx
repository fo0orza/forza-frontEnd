"use client"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { X } from "lucide-react"
import { Drawer as DrawerPrimitive } from "vaul"
import NavbarLogo from "@/components/shared/logo/index"
import DrawerFooter from "@/components/shared/navbar/drawer/DrawerFooter"
import DrawerNavLinks from "@/components/shared/navbar/drawer/DrawerNavLinks"
import { useNavbarStore } from "@/store/navbar"
const NavbarDrawer = () => {
    const { isDrawerOpen, closeDrawer } = useNavbarStore()

    return (
        <DrawerPrimitive.Root open={isDrawerOpen} onOpenChange={(open) => !open && closeDrawer()} direction="left" shouldScaleBackground={false}>
            <DrawerPrimitive.Portal>
                <DrawerPrimitive.Overlay className="fixed inset-0 z-50 bg-black/70" />
                <DrawerPrimitive.Content className="fixed left-0 top-0 z-50 h-dvh w-70 bg-background border-r border-muted-foreground/20 flex flex-col outline-none gap-6 px-6 py-6">
                    <VisuallyHidden>
                        <DrawerPrimitive.Title>Navigation menu</DrawerPrimitive.Title>
                    </VisuallyHidden>
                    {/* Header */}
                    <div className="flex items-center justify-between shrink-0">
                        <NavbarLogo />
                        <DrawerPrimitive.Close asChild>
                            <button
                                aria-label="Close menu"
                                className="flex items-center justify-center w-10 h-10 rounded-lg text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
                            >
                                <X size={20} />
                            </button>
                        </DrawerPrimitive.Close>
                    </div>
                    <hr className="border-muted-foreground/30 shrink-0" />
                    {/* Scrollable links area */}
                    <div className="flex-1 overflow-y-auto min-h-0">
                        <DrawerNavLinks />
                    </div>
                    {/* Footer pinned to bottom */}
                    <div className="shrink-0">
                        <DrawerFooter />
                    </div>

                </DrawerPrimitive.Content>
            </DrawerPrimitive.Portal>
        </DrawerPrimitive.Root>
    )
}

export default NavbarDrawer

