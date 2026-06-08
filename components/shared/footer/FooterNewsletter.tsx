"use client"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { type FormEvent, useState } from "react"
import { Input } from "@/components/ui/input"

const FooterNewsletter = () => {
    const t = useTranslations("Footer.newsletter")
    const [email, setEmail] = useState("")

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setEmail("")
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 md:max-w-[332px]"
            aria-label={t("submitAria")}
        >
            <label htmlFor="footer-newsletter-email" className="text-[13px] text-muted-foreground">
                {t("label")}
            </label>

            <div className="flex items-stretch gap-2">
                <Input
                    id="footer-newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("placeholder")}
                    autoComplete="email"
                    className="h-12 rounded-xl border-white/10 bg-white/[0.03] px-4 text-[14px] text-primary placeholder:text-[#666666] focus-visible:border-secondary/50 focus-visible:ring-0 md:text-[14px]"
                />
                <button
                    type="submit"
                    aria-label={t("submitAria")}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-background shadow-[0_0_24px_-4px_var(--secondary)] transition-all duration-200 hover:bg-secondary/90 hover:shadow-[0_0_28px_-2px_var(--secondary)] active:translate-y-px"
                >
                    <ArrowRight className="h-5 w-5" />
                </button>
            </div>
        </form>
    )
}

export default FooterNewsletter
