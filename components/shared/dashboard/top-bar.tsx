"use client"
import useLocalization from "@/hooks/use-localization";

const TopBar =  () => {
    const { currentTime} = useLocalization();
    return (
        <div className="flex items-center justify-between border-b border-muted-foreground/30 pb-3">
            <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                    <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                    <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                </div>
                <span className="ml-3 text-xs text-muted-foreground">forza.app/dashboard</span>
            </div>
            <span className="text-xs text-muted-foreground">{currentTime}</span>
        </div>
    )
}

export default TopBar
