import { Button } from "@/components/ui/button"

const HeroActions = () => {
    return (
        <div className="flex items-center justify-center gap-5">
            <Button size={"lg"} className="font-semibold text-base py-6">Get Started</Button>
            <Button size={"lg"} className="font-semibold text-base py-6 bg-primary/10 hover:bg-primary/15 backdrop-blur-sm text-primary">Learn More</Button>
        </div>
    )
}

export default HeroActions