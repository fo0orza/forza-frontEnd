"use client"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"

const DrawerFooter = () => {
    const t = useTranslations("Navbar")

    return (
        <div className="mt-auto pt-6">
            <Button className="w-full h-12 rounded-[10px] bg-secondary text-background font-semibold text-[15px] hover:bg-secondary/80 transition-colors duration-200 cursor-pointer">
                {t("cta")}
            </Button>
            <p className="text-center text-xs text-muted-foreground mt-2.5">
                {t("noCreditCard")}
            </p>
        </div>
    )
}

export default DrawerFooter
