import {
    ChartNoAxesColumn,
    CheckCircle,
    Dumbbell,
    Flame,
    Salad,
    Send,
    Sparkles,
    Target,
    Users,
} from "lucide-react";
import { type IFeature } from "@/interfaces/feature-showcase";

export const features: IFeature[] = [
    { icon: Users, translationKey: "01" },
    { icon: Salad, translationKey: "02" },
    { icon: Sparkles, translationKey: "03" },
    { icon: Dumbbell, translationKey: "04" },
    { icon: ChartNoAxesColumn, translationKey: "05" },
    { icon: Send, translationKey: "06" },
];

export const forYouFeatures: IFeature[] = [
    { icon: Flame, translationKey: "01" },
    { icon: Salad, translationKey: "02" },
    { icon: Dumbbell, translationKey: "03" },
    { icon: CheckCircle, translationKey: "04" },
    { icon: ChartNoAxesColumn, translationKey: "05" },
    { icon: Target, translationKey: "06" },
];