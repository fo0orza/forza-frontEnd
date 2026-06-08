interface IProps {
    children: React.ReactNode
}
const Card = ({ children }: IProps) => {
    return (
        <article className="relative h-full rounded-2xl border border-secondary/20 bg-background/20 p-6 backdrop-blur-xl hover:-translate-y-1 hover:border-secondary/40 transition-transform duration-300 overflow-hidden">
            <div className="relative z-2 flex flex-col h-full">
                {children}
            </div>
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-secondary/80 to-transparent" />
            <div aria-hidden="true" style={{ background: "radial-gradient(ellipse, oklch(0.82 0.24 145 / 0.09), transparent 70%)" }} className="absolute w-80  h-46 -top-20 left-1/2 -translate-x-1/2" />
        </article>
    )
}

export default Card