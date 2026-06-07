import { cn } from "@/lib/utils";

type HeadingLevel = "h2" | "h3" | "h4" | "h5" | "h6";

interface IProps {
    title: string;
    className?: string;
    as?: HeadingLevel;
}
const CardTitle = ({ title, className, as: Tag = "h3" }: IProps) => {
    return (
        <Tag className={cn("text-lg font-bold text-primary capitalize", className)}>
            {title}
        </Tag>
    )
}

export default CardTitle