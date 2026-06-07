import {
    InstagramIcon,
    Linkedin01Icon,
    NewTwitterIcon,
    YoutubeIcon,
} from "@hugeicons/core-free-icons"
import { CircleCheck, Lock, Zap } from "lucide-react"
import { type IFooterColumn, type ISocialLink, type ITrustBadge } from "@/interfaces/footer"

export const FOOTER_COLUMNS: IFooterColumn[] = [
    {
        translationKey: "product",
        links: [
            { translationKey: "features", href: "#features" },
            { translationKey: "pricing", href: "#pricing" },
            { translationKey: "howItWorks", href: "#how-it-works" },
            { translationKey: "forCoaches", href: "#coaches" },
            { translationKey: "forIndividuals", href: "#individuals" },
            { translationKey: "changelog", href: "#changelog" },
        ],
    },
    {
        translationKey: "company",
        links: [
            { translationKey: "about", href: "#about" },
            { translationKey: "blog", href: "#blog" },
            { translationKey: "careers", href: "#careers" },
            { translationKey: "press", href: "#press" },
            { translationKey: "contact", href: "#contact" },
            { translationKey: "affiliates", href: "#affiliates" },
        ],
    },
    {
        translationKey: "support",
        links: [
            { translationKey: "help", href: "#help" },
            { translationKey: "documentation", href: "#docs" },
            { translationKey: "status", href: "#status" },
            { translationKey: "privacy", href: "#privacy" },
            { translationKey: "terms", href: "#terms" },
            { translationKey: "cookies", href: "#cookies" },
        ],
    },
]

export const FOOTER_SOCIAL_LINKS: ISocialLink[] = [
    { translationKey: "twitter", href: "https://twitter.com", icon: NewTwitterIcon },
    { translationKey: "instagram", href: "https://instagram.com", icon: InstagramIcon },
    { translationKey: "linkedin", href: "https://linkedin.com", icon: Linkedin01Icon },
    { translationKey: "youtube", href: "https://youtube.com", icon: YoutubeIcon },
]

export const FOOTER_TRUST_BADGES: ITrustBadge[] = [
    { translationKey: "ssl", icon: Lock },
    { translationKey: "uptime", icon: Zap },
    { translationKey: "gdpr", icon: CircleCheck },
]
