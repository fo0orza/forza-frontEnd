import { ISolutionWithContent } from "@/interfaces/solutions"

const Card = ({ icon: Icon, title, description }: ISolutionWithContent) => {
    return (
        <article className="relative rounded-2xl border border-secondary/20 bg-background/20 p-6 backdrop-blur-xl hover:-translate-y-1 hover:border-secondary/40 transition-transform duration-300 overflow-hidden">
            <div className="relative z-2">
                <div style={{ boxShadow: "0 0 30px oklch(0.82 0.24 145 / 0.25)" }} className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 ring-1 ring-secondary/30">
                    <Icon className="h-6 w-6 text-secondary" />
                </div>
                <h4 className="mt-5 text-lg font-bold text-primary capitalize">
                    {title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                </p>
            </div>
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-secondary/80 to-transparent" />
            <div aria-hidden="true" style={{ background: "radial-gradient(ellipse, oklch(0.82 0.24 145 / 0.15), transparent 70%)" }} className="absolute w-80  h-46 -top-20 left-1/2 -translate-x-1/2" />
        </article>
    )
}

export default Card