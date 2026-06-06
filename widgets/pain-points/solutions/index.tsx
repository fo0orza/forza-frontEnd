import Heading from "@/widgets/pain-points/solutions/heading"
import ScrollDownIndicator from "@/widgets/pain-points/solutions/scroll-down-indicator"
import SolutionsGrid from "@/widgets/pain-points/solutions/solutions-grid"

const Solutions = () => {
    return (
        <section aria-labelledby="solutions-heading" className="w-full max-w-content mx-auto">
            <div className="relative">
                <Heading />
                <div className="mx-auto mt-5">
                    <ScrollDownIndicator />
                </div>
                <div className="mt-20">
                    <SolutionsGrid />
                </div>
            </div>
        </section>
    )
}

export default Solutions