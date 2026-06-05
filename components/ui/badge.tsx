import { cva, type VariantProps } from "class-variance-authority";
import AnimatedCircle from "@/components/ui/animated-circle";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "flex w-fit items-center gap-2 rounded-full h-fit px-4 py-1.5 backdrop-blur-sm",
    {
        variants: {
            variant: {
                default: "border border-secondary/30 bg-background text-primary/90",
                coral: "border border-coral/30 bg-coral/3 text-coral",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

interface BadgeProps extends VariantProps<typeof badgeVariants> {
    text: string;
    className?: string;
    glowCircle?: boolean;
}

const Badge = ({ text, className, glowCircle = true, variant }: BadgeProps) => {
    return (
        <div className={cn(badgeVariants({ variant }), className)}>
            {glowCircle && <AnimatedCircle variant={variant === "coral" ? "coral" : "secondary"} />}
            <span className="text-xs font-medium tracking-wide ">
                {text}
            </span>
        </div>
    )
}

export default Badge