interface IProps {
    subtitle: string;
}
const Subtitle = ({ subtitle }: IProps) => {
    return (
        <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
            {subtitle}
        </p>
    )
}

export default Subtitle