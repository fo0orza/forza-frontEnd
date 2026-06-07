import { cn } from "@/lib/utils";

interface IProps {
    className?: string;
    description: string;
}
const CardDescription = ({ description, className }: IProps) => {
    return (
        <p className={cn("text-sm leading-relaxed text-muted-foreground", className)}>
            {description}
        </p>
    )
}

export default CardDescription