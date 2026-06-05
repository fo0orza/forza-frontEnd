"use client"
import { ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button"
import useLocalization from "@/hooks/use-localization";

const CurrentLanguage = (props: React.ComponentPropsWithoutRef<"button">) => {
    const { currentLang } = useLocalization();

    return (
        <Button variant="outline" className="rounded-full text-[12px] transition-colors bg-transparent text-muted-foreground border-muted-foreground hover:bg-transparent hover:text-primary hover:border-primary aria-expanded:bg-transparent aria-expanded:text-muted-foreground cursor-pointer" {...props}>
            <Globe className="h-3 w-3" />
            <div className="flex items-center gap-1">
                <span className="font-medium block capitalize">{currentLang?.label}</span>
                <ChevronDown className="size-3" aria-hidden="true" />
            </div>
        </Button>
    )
}

export default CurrentLanguage