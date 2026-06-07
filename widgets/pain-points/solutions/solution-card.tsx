import Card from "@/components/ui/card/card"
import CardDescription from "@/components/ui/card/card-description"
import CardIcon from "@/components/ui/card/card-icon"
import CardTitle from "@/components/ui/card/card-title"
import { ISolutionWithContent } from "@/interfaces/solutions"
const SolutionCard = ({ icon: Icon, title, description }: ISolutionWithContent) => {
    return (
        <Card>
            <CardIcon Icon={Icon} />
            <CardTitle className="mt-5" title={title} />
            <CardDescription className="mt-2" description={description} />
        </Card>

    )
}

export default SolutionCard