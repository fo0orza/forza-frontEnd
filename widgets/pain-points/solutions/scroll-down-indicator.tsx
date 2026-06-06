import { ArrowDown } from "lucide-react"

const ScrollDownIndicator = () => {
    return (
        <div aria-hidden="true" className="relative">
            <div className="relative mx-auto h-14 w-px bg-linear-to-b from-secondary/0 via-secondary/40 to-secondary z-1" />
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-secondary/40 bg-background/80 backdrop-blur-sm mx-auto z-2">
                <ArrowDown className="h-4 w-4 text-secondary" />
            </div>
        </div>
    )
}

export default ScrollDownIndicator