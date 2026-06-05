import { cva, type VariantProps } from "class-variance-authority"

const circleVariants = cva("relative flex h-2 w-2", {
    variants: {
        variant: {
            secondary: "[--circle-color:theme(colors.secondary.DEFAULT)]",
            coral: "[--circle-color:theme(colors.coral)]",
        },
    },
    defaultVariants: {
        variant: "secondary",
    },
})

type AnimatedCircleProps = VariantProps<typeof circleVariants>

const AnimatedCircle = ({ variant }: AnimatedCircleProps) => {
    return (
        <span aria-hidden="true" className={circleVariants({ variant })}>
            <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ backgroundColor: "var(--circle-color)" }}
            />
            <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ backgroundColor: "var(--circle-color)" }}
            />
        </span>
    )
}

export default AnimatedCircle