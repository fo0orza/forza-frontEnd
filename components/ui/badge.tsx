import { cn } from "@/lib/utils";

interface BadgeProps {
    text: string;
    className?: string;
}
const Badge = ({ text , className }: BadgeProps) => {
    return (
        <div className={cn("inline-flex items-center gap-2 rounded-full border border-secondary/30 h-fit px-4 py-1.5 backdrop-blur-sm bg-background", className)}>
            <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            <span className="text-xs font-medium tracking-wide text-primary/90">
                {text}
            </span>
        </div>
    )
}

export default Badge