interface IProps {
    title: string;
}
const Title = ({ title }: IProps) => {
    return (
        <h3 className="text-2xl sm:text-[26px] text-primary font-bold leading-tight mt-3">{title}</h3>
    )
}

export default Title