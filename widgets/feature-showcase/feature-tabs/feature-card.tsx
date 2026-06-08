import { LucideIcon } from "lucide-react";
import Badge from "@/components/ui/badge";
import Card from "@/components/ui/card/card"
import CardDescription from "@/components/ui/card/card-description";
import CardIcon from "@/components/ui/card/card-icon"
import CardTitle from "@/components/ui/card/card-title";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    badge: string;
}

const FeatureCard = ({ icon, title, description, badge }: FeatureCardProps) => {
    return (
        <Card>
            <CardIcon Icon={icon} />
            <CardTitle className="mt-5" title={title} />
            <CardDescription className="mt-2 flex-1" description={description} />
            <Badge className="mt-5" variant="secondary" text={badge} glowCircle={false} />
        </Card>
    )
}

export default FeatureCard