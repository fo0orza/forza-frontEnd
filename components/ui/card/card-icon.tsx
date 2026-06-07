
import { type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils";

interface IProps {
    Icon: LucideIcon
    className?: string;
}
const CardIcon = ({ Icon, className }: IProps) => {
  return (
     <div aria-hidden="true" className={cn("flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 ring-1 ring-secondary/30", className)}>
            <Icon className="h-6 w-6 text-secondary" />
        </div>
  )
}

export default CardIcon